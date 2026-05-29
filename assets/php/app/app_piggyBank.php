<?php
    session_start();
    header("Content-Type: application/json");
    
    require_once "../Database.php";

    $email = $_SESSION['email'] ?? null;
    if(!$email){
        echo json_encode([
            "error" => "User not Logged in"
        ]);
        exit;
    }
    $stmt = $pdo->prepare("SELECT nazwa FROM skarbonka INNER JOIN uzytkownicy ON skarbonka.id_uzytkownika = uzytkownicy.id WHERE uzytkownicy.id = 1;");
     $stmt = $pdo->prepare("SELECT SUM(kwota) as obecna_kwota FROM skarbonka_wplaty INNER JOIN uzytkownicy ON skarbonka_wplaty.id_skarbonki = uzytkownicy.id WHERE uzytkownicy.id = 1;");
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([
        "description" => $data[0]['nazwa'] ?? null,
        "piggyBank" => $data[0]['obecna_kwota'] ?? null,
        "message" => "Piggy Bank data loaded successfully"
    ]);
?>