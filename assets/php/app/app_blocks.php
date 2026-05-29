<?php
session_start();
header("Content-Type: application/json");
    $email = $_SESSION['email'];
    $dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
        $user = "root";
        $pass = "";
        $pdo = new PDO($dsn, $user, $pass);
        $stmt=$pdo->prepare("SELECT SUM(kwota) as kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE id_uzytkownika = :id_uzytkownika AND typ='przychod'");
        $stmt->execute([
            ':id_uzytkownika' => $_SESSION['id']
        ]);
        $dataBudget = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt=$pdo->prepare("SELECT SUM(kwota) as kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE id_uzytkownika = :id_uzytkownika AND typ='wydatek'");
         $stmt->execute([
            ':id_uzytkownika' => $_SESSION['id']
        ]);
        $dataExpenses = $stmt->fetch(PDO::FETCH_ASSOC);
         $stmt=$pdo->prepare("SELECT kwota,opis FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE id_uzytkownika = :id_uzytkownika AND typ='wydatek'");
         $stmt->execute([
            ':id_uzytkownika' => $_SESSION['id']
        ]);
        $dataExpenses = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode([
                "budget" => $dataBudget['kwota'] ?? null,
                "expenses" => $dataExpenses['kwota'] ?? null,
            ]
        );
?>  