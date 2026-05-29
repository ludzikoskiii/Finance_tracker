<?php
    session_start();
    header("Content-Type: application/json");
    if(!isset($_SESSION['email'])){
        echo json_encode([
            "error" => "User not logged in"
        ]);
        exit();
    }
    require_once "../Database.php";
    $stmt=$pdo->prepare("SELECT kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE id_uzytkownika = :id_uzytkownika AND typ='przychod'");
        $stmt->execute([
            ':id_uzytkownika' => $_SESSION['id']
        ]);
    $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([
        "transactions" => $user ?? null,
        "message" => "Transactions loaded successfully"
    ]);
?>