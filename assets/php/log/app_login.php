<?php
        session_start();
        header("Content-Type: application/json");
        
        require_once "Database.php";
        require_once "UserRepository.php";
        require_once "AuthController.php";

        $db = new Database();
        $userRepository = new UserRepository($db->getConnection());

        $authController = new AuthController($userRepository);
        

        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $authController->login();
        }
?>  