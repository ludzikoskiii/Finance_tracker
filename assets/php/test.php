<?php
session_start();
header("Content-Type: application/json");
    $email = $_SESSION['email'];
    $dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
        $user = "root";
        $pass = "";
        $pdo = new PDO($dsn, $user, $pass);
        $stmt=$pdo->prepare("SELECT kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE email = :email");
        $stmt->execute([
            ':email' => $email
        ]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($data);
?>  