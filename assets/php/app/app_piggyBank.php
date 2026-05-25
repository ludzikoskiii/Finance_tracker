<?php
    session_start();
    header("Content-Type: application/json");
    
    require_once "../../database.php";

    $email = $_SESSION['email'] ?? null;
    if(!$email){
        echo json_encode([
            "error" => "User not Logged in"
        ]);
        exit;
    }
    $stmt = $pdo->prepare("SELECT kwota FROM skarbonka_wplaty INNER JOIN uzytkownicy ON skarbonka_wplaty.id_uzytkownika = uzytkownicy.id WHERE email = :email;");
    $stmt->execute([
        ':email' => $email
    ]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([
        "piggyBank" => $data
    ]);
?>