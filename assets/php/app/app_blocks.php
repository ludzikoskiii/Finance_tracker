<?php
session_start();
header("Content-Type: application/json");
    $email = $_SESSION['email'];
    $dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
        $user = "root";
        $pass = "";
        $pdo = new PDO($dsn, $user, $pass);
        $stmt=$pdo->prepare("SELECT SUM(kwota) as kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE email = :email AND typ='przychod'");
        $stmt->execute([
            ':email' => "jan@example.com"
        ]);
        $dataBudget = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt=$pdo->prepare("SELECT kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE email = :email AND typ='wydatek'");
         $stmt->execute([
            ':email' => "jan@example.com"
        ]);
        $dataExpenses = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode([
                "budget" => $dataBudget,
                "expenses" => $dataExpenses
            ]
        );
?>  