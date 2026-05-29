<?php
    session_start();
    header("Content-Type: application/json");

    if(!isset($_SESSION['email'])){
        echo json_encode([
            "error" => "User not logged in"
        ]);
        exit();
    }

    $email = $_SESSION['email'];

    require_once "../Database.php";

    $stmt = $pdo->prepare("SELECT rodzina FROM uzytkownicy WHERE id = 1;");
    $stmt->execute();
    $haveFamily = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt = $pdo->prepare("SELECT nazwa, miesieczny_budzet FROM rodzina INNER JOIN uzytkownicy ON uzytkownicy.id = rodzina.id_wlasciciela WHERE uzytkownicy.id = 1;");
    $stmt->execute();
    $familyName = $stmt->fetch(PDO::FETCH_ASSOC);
    if(!$haveFamily){
        echo json_encode([
            "error" => "Family information not found"
        ]);
        exit();
    }
    echo json_encode([
        "haveFamily" => $haveFamily['rodzina'],
        "familyName" => $familyName['nazwa'],
        "familyBudget" => $familyName['miesieczny_budzet'],
        "message" => "Family information loaded successfully"
    ]);
?>