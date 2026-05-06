<?php 
$dsn = "mysql:host=localhost;dbname=bazatest;charset=utf8mb4";
$user = "root";
$password = "";

try{
    $pdo = new PDO($dsn, $user, $password);
    //ustawienie trybu bledow
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch (PDOException $e){
    echo "Błąd połączenia: " . $e->getMessage();
}
$data = json_decode(file_get_contents("php://input"), true);

$imie = $data["imie"];
$email = $data["email"];
$haslo = $data["haslo"];

$stmt = $pdo->prepare("INSERT INTO users (imie,email,haslo) VALUES (:imie,:email,:haslo)");
$stmt->execute([
    'imie' => $name,
    'email' => $email,
    'haslo' => $password
]);

?>