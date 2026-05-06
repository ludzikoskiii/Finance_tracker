<?php 
header("Content-Type: application/json");
$dsn = "mysql:host=localhost;dbname=bazatest;charset=utf8mb4";
$user = "root";
$password = "";

try{
    $pdo = new PDO($dsn, $user, $password);
    //ustawienie trybu bledow
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch (PDOException $e){
    echo "Błąd połączenia: " . $e->getMessage();
    exit;
}
$data = json_decode(file_get_contents("php://input"), true);
if(!$data){
    echo "Brak danych";
    exit;
}
$imie = $data["imie"];
$email = $data["email"];
$haslo = $data["haslo"];

$stmt=$pdo->prepare("INSERT INTO tabela (imie,email,haslo) VALUES (:imie,:email,:haslo)");
$stmt->execute([
    'imie' => $imie,
    'email' => $email,
    'haslo' => $haslo
]);
echo json_encode(["message" => "Rejestracja udana"]);
?>