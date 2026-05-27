<?php
class AuthController {
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository; // poprawiona literówka
    }

    public function login(): void {
        $data     = json_decode(file_get_contents("php://input"), true);
        $email    = $data["email"]    ?? "";
        $password = $data["password"] ?? "";

        $user = $this->userRepository->getUserByEmail($email);

        if (!$user) {
            echo json_encode(["error" => true, "message" => "Użytkownik nie istnieje"]);
            return;
        }
        if (!password_verify($password, $user['haslo_hash'])) {
            echo json_encode(["error" => true, "message" => "Nieprawidłowe hasło"]);
            return;
        }

        $_SESSION['imie']  = $user['imie'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['rola']  = $user['rola'];
        $_SESSION['id']    = $user['id'];

        echo json_encode(["error" => false, "imie" => $user['imie']]);
    }

    // NOWE
    public function register(): void {
        $data     = json_decode(file_get_contents("php://input"), true);
        $imie     = trim($data["name"]     ?? "");
        $email    = trim($data["email"]    ?? "");
        $password = trim($data["password"] ?? "");

        // Walidacja
        if (empty($imie) || empty($email) || empty($password)) {
            echo json_encode(["success" => false, "message" => "Wszystkie pola są wymagane"]);
            return;
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(["success" => false, "message" => "Nieprawidłowy format e-mail"]);
            return;
        }
        if (strlen($password) < 6) {
            echo json_encode(["success" => false, "message" => "Hasło musi mieć min. 6 znaków"]);
            return;
        }
        if ($this->userRepository->emailExists($email)) {
            echo json_encode(["success" => false, "message" => "E-mail jest już zajęty"]);
            return;
        }

        $created = $this->userRepository->createUser($imie, $email, $password);

        if ($created) {
            echo json_encode(["success" => true, "message" => "Rejestracja udana"]);
        } else {
            echo json_encode(["success" => false, "message" => "Błąd podczas rejestracji"]);
        }
    }

    public function checkEmail(): void {
        $email = trim($_GET["email"] ?? "");

        if (empty($email)) {
            echo json_encode(["success" => false, "message" => "Nie podano e-mail"]);
            return;
        }

        echo json_encode(["exists" => $this->userRepository->emailExists($email)]);
    }
}