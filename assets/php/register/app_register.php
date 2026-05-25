<?php
session_start();
header("Content-Type: application/json");

header("Access-Control-Allow-Origin: http://127.0.0.1");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

require_once "../log/Database.php";
require_once "../log/UserRepository.php";
require_once "../log/AuthController.php";

$db             = new Database();
$userRepository = new UserRepository($db->getConnection());
$authController = new AuthController($userRepository);

match ($_SERVER["REQUEST_METHOD"]) {
    "GET"    => $authController->checkEmail(),
    "POST"   => $authController->register(),
    default  => http_response_code(405)
};