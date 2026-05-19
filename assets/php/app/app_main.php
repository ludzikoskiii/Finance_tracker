<?php
session_start();
header("Content-Type: application/json");
    $imie = $_SESSION['imie'] ?? null;
    if($imie){
        echo json_encode([
            "imie" => $imie
        ]);
    }
?>  