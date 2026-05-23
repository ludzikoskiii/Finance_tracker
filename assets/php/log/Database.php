<?php
    class Database {
        private PDO $pdo;

         public function __construct()
    {
        $dsn = "mysql:host=localhost;dbname=finance_tracker;charset=utf8mb4";
        $user = "root";
        $pass = "";

        
        $this->pdo = new PDO($dsn, $user, $pass);
    }
        public function getConnection(): PDO {
            return $this->pdo;
        }
    }
?>