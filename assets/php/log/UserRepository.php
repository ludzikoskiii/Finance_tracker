<?php
class UserRepository {
    private PDO $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function getUserByEmail(string $email): ?array {
        $stmt = $this->pdo->prepare("SELECT * FROM uzytkownicy WHERE email = :email");
        $stmt->execute([':email' => $email]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        return $data ?: null;
    }

    public function emailExists(string $email): bool {
        return $this->getUserByEmail($email) !== null;
    }

    public function createUser(string $imie, string $email, string $password): bool {
        $haslo_hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $this->pdo->prepare("
            INSERT INTO uzytkownicy (imie, email, haslo_hash, rola, data_rejestracji, aktywny)
            VALUES (:imie, :email, :haslo_hash, 'user', :data_rejestracji, 1)
        ");
        return $stmt->execute([
            ':imie'             => $imie,
            ':email'            => $email,
            ':haslo_hash'       => $haslo_hash,
            ':data_rejestracji' => date("Y-m-d H:i:s")
        ]);
    }
}