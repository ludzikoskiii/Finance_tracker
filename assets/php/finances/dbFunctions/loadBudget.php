<?php
//start sesji i ustawienie nagłówka odpowiedzi jako JSON
session_start();
header("Content-Type: application/json");
require_once "../../database.php";
    //połączenie z bazą danych
    
    //pobranie danych o budżecie użytkownika
    $stmt=$pdo->prepare("SELECT SUM(kwota) as kwota,data_transakcji FROM transakcje WHERE id_uzytkownika = :id_uzytkownika AND typ='przychod' GROUP BY data_transakcji");
    $stmt->execute([
        ':id_uzytkownika' => $_SESSION['id']
    ]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //pobieranie wydatkow
    $stmt=$pdo->prepare("SELECT SUM(kwota) as kwota,data_transakcji FROM transakcje WHERE id_uzytkownika = :id_uzytkownika AND typ='wydatek' GROUP BY data_transakcji");
    $stmt->execute([
        ':id_uzytkownika' => $_SESSION['id']
    ]);
    $result2 = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    //zwrócenie danych o budżecie w formacie JSON
    echo json_encode([
        "incomes" => $result ?? null,
        "expenses" => $result2 ?? null,
    ]);
?>  