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
            $haslo_hash = password_hash($_GET["haslo_hash"], PASSWORD_DEFAULT);
            $stmt=$pdo->prepare("SELECT * FROM uzytkownicy WHERE email = :email AND haslo_hash = :haslo_hash");
            $stmt->execute([
                ':email' => $email,
                ':haslo_hash' => $haslo_hash
            ]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!password_verify($user['haslo_hash'], $haslo_hash)){
                echo json_encode([
                    "error" => true
                ])
            }
            else{
                echo json_encode($user);
                $_SESSION['imie'] = $user['imie'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['haslo_hash'] = $user['haslo_hash'];
                header("Location: ../php/app_dashboard.php");
            }
            // $stmt->close();
            // $pdo = null;
        }
?>  