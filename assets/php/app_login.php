<?php
        session_start();
        header("Content-Type: application/json");
        $dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
        $user = "root";
        $pass = "";
        $pdo = new PDO($dsn, $user, $pass);

        $method = $_SERVER["REQUEST_METHOD"];
        if($method == "POST"){
        
            $data = json_decode(file_get_contents("php://input"), true);
            $email = $data["email"];
            $password = $data["password"];
            $stmt=$pdo->prepare("SELECT * FROM uzytkownicy WHERE email = :email");
            $stmt->execute([
                ':email' => $email
            ]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!$user){
                echo json_encode([
                "error" => true,
                "message" => "User does not exist"
            ]);

                exit;
            }
            if(password_verify($password, $user['haslo_hash'])){
                 $_SESSION['imie'] = $user['imie'];
                 $_SESSION['email'] = $user['email'];
                 $_SESSION['rola'] = $user['rola'];
                 echo json_encode([
                "error" => false,
                "imie" => $user['imie']
            ]);
            exit;
            }
            else{
                echo json_encode([
                    "error" => true,
                    "message" => "Password invalid"
                ]);
                exit;
               
            }
        }
?>  