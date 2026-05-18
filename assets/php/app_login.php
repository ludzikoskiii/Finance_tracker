<?php
        header("Content-Type: application/json");
        $dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
        $user = "root";
        $password = "";
        $pdo = new PDO($dsn, $user, $password);

        $method = $_SERVER["REQUEST_METHOD"];
        if($method == "GET"){
           if(!isset($_GET["email"])){
            echo json_encode([
                "error" => true
            ]);
           }
            $email = $_GET["email"];
            $haslo_hash = $_GET["haslo_hash"];
            $stmt=$pdo->prepare("SELECT * FROM uzytkownicy WHERE email = :email AND haslo_hash = :haslo_hash");
            $stmt->execute([
                ':email' => $email,
                ':haslo_hash' => $haslo_hash
            ]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            echo json_encode($user);
        }
        // if($method == "POST"){
        //     // if()
        // }
?>  