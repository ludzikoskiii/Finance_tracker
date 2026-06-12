<?php
//start sesji i ustawienie nagłówka odpowiedzi jako JSON
session_start();
header("Content-Type: application/json");
require_once "../../database.php";
    //połączenie z bazą danych
    
    //pobranie danych o budżecie użytkownika
    $stmt=$pdo->prepare("SELECT kwota FROM uzytkownicy INNER JOIN transakcje ON uzytkownicy.id = transakcje.id_uzytkownika WHERE id_uzytkownika = :id_uzytkownika AND typ='przychod'");
    $stmt->execute([
        ':id_uzytkownika' => $_SESSION['id']
    ]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //zwrócenie danych o budżecie w formacie JSON
    echo json_encode([
        "budget" => $result ?? null,
        "message" => "Budget data loaded successfully"
    ]);
?>  