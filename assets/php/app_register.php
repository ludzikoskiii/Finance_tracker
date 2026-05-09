<?php 
header('Content-Type: application/json');

try{
$dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
$user = "root";
$password = "";
$pdo = new PDO($dsn, $user, $password,[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);
$method = $_SERVER["REQUEST_METHOD"];
if($method == "GET"){
     
     if(!isset($_GET["email"])){
        echo json_encode([
            "success" => false,
            "message" => "Nie podano adresu e-mail"
        ]);
     }
     $email = $_GET["email"];
    $stmt=$pdo->prepare("SELECT * FROM uzytkownicy WHERE email = :email");
    $stmt->execute(['email' => $email]);

    $user = $stmt->fetch();

    echo json_encode([
        "exists" => $user ? true : false
    ]);
    exit;
}
if($method == "POST"){

    
    //ustawienie trybu bledow
    // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $data = json_decode(file_get_contents("php://input"), true);
     $imie = $data["name"];
     $email = $data["email"];
     $haslo = $data["password"];    
     if(empty($email)){
        echo json_encode([
            "success" => false,
            "message" => "Email jest wymagany"
        ]);

        exit;
     }
     if(!$data){
        echo json_encode([
            "success" => false,
            "message" => "Brak danych"
        ]);
        exit;
    }
     
$stmt=$pdo->prepare("INSERT INTO uzytkownicy (imie,email,haslo_hash,rola,data_rejestracji,aktywny) VALUES (:imie,:email,:haslo_hash,:rola,:data_rejestracji,:aktywny)");
$stmt->execute([
    'imie' => $imie,
    'email' => $email,
    'haslo_hash' => $haslo,
    'rola' => 'user',
    'data_rejestracji' => date("Y-m-d H:i:s"),
    'aktywny' => 1

]);
echo json_encode([
        "success" => true,
        "message" => "Rejestracja udana"
    ]);
    exit;
}
}
catch (PDOException $e){

    echo json_encode([
     "success" => false,
     "error" => $e->getMessage()
     ]);
}



?>