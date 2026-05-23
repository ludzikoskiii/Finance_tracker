-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 23, 2026 at 10:37 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finance_tracker`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kategorie`
--

CREATE TABLE `kategorie` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(80) NOT NULL,
  `typ` enum('przychod','wydatek') NOT NULL,
  `opis` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategorie`
--

INSERT INTO `kategorie` (`id`, `nazwa`, `typ`, `opis`) VALUES
(1, 'Wynagrodzenie', 'przychod', 'Pensja z pracy'),
(2, 'Jedzenie', 'wydatek', 'Zakupy spozywcze'),
(3, 'Transport', 'wydatek', 'Paliwo, bilety');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skarbonka`
--

CREATE TABLE `skarbonka` (
  `id` int(11) NOT NULL,
  `id_uzytkownika` int(11) NOT NULL,
  `nazwa` varchar(30) NOT NULL,
  `cel_kwota` decimal(10,2) NOT NULL DEFAULT 0.00,
  `obecna_kwota` decimal(10,2) NOT NULL DEFAULT 0.00,
  `data_utworzenia` date NOT NULL DEFAULT curdate(),
  `typ` enum('atrakcje','wakacje','zakup','inne') NOT NULL DEFAULT 'inne'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skarbonka`
--

INSERT INTO `skarbonka` (`id`, `id_uzytkownika`, `nazwa`, `cel_kwota`, `obecna_kwota`, `data_utworzenia`, `typ`) VALUES
(1, 1, 'Samochód', 20000.00, 150.00, '2026-05-23', 'zakup'),
(2, 1, 'Samochód', 20000.00, 150.00, '2026-05-23', 'zakup');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skarbonka_wplaty`
--

CREATE TABLE `skarbonka_wplaty` (
  `id` int(11) NOT NULL,
  `id_skarbonki` int(11) NOT NULL,
  `kwota` decimal(10,2) NOT NULL,
  `data` date NOT NULL DEFAULT curdate(),
  `opis` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skarbonka_wplaty`
--

INSERT INTO `skarbonka_wplaty` (`id`, `id_skarbonki`, `kwota`, `data`, `opis`) VALUES
(1, 1, 150.00, '2026-05-23', 'Pierwsza wpłata');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `transakcje`
--

CREATE TABLE `transakcje` (
  `id` int(11) NOT NULL,
  `id_uzytkownika` int(11) NOT NULL,
  `id_kategorii` int(11) NOT NULL,
  `kwota` decimal(10,2) NOT NULL,
  `typ` enum('przychod','wydatek') NOT NULL,
  `opis` varchar(255) DEFAULT NULL,
  `data_transakcji` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transakcje`
--

INSERT INTO `transakcje` (`id`, `id_uzytkownika`, `id_kategorii`, `kwota`, `typ`, `opis`, `data_transakcji`) VALUES
(1, 1, 1, 5500.00, 'przychod', 'Pensja marzec', '2024-03-10'),
(2, 1, 2, 320.00, 'wydatek', 'Zakupy Biedronka', '2024-03-12'),
(3, 2, 1, 4200.00, 'przychod', 'Pensja marzec', '2024-03-10'),
(4, 2, 3, 150.00, 'wydatek', 'Paliwo', '2024-03-13'),
(5, 1, 3, 200.00, 'przychod', 'am', '2026-05-12');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `imie` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `haslo_hash` varchar(255) NOT NULL,
  `rola` enum('user','admin') NOT NULL DEFAULT 'user',
  `data_rejestracji` datetime NOT NULL DEFAULT current_timestamp(),
  `aktywny` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `imie`, `email`, `haslo_hash`, `rola`, `data_rejestracji`, `aktywny`) VALUES
(1, 'Jan', 'jan@example.com', '$2y$12$hash1', 'admin', '2026-05-06 19:49:01', 1),
(2, 'Anna', 'anna@example.com', '$2y$12$hash2', 'user', '2026-05-06 19:49:01', 1),
(90, 'asd', 'asd@asd.com', '$2y$10$DG9W85BkuV60jSPWz4z4GOtdjQSjYwr.t9bs7ENQ7uMK/aD6RHohi', 'user', '2026-05-19 19:30:13', 1),
(91, 'Kuba', 'kubagorczowski123@gmail.com', '$2y$10$TJzPCvferuz8G2Kn.8lkJOfmaG9gYpJZeu7N4SAB6zKGkIrn5Dm0m', 'user', '2026-05-19 19:58:18', 1),
(92, 'asd', 'a@a.com', '$2y$10$ZgF65ZbOVuMVmNei.RIfPuxC7cKZoT9SHRKi5nFGaLhUnYTKlsPiG', 'user', '2026-05-19 22:11:12', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `skarbonka`
--
ALTER TABLE `skarbonka`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_skarbonka_uzytkownik` (`id_uzytkownika`);

--
-- Indeksy dla tabeli `skarbonka_wplaty`
--
ALTER TABLE `skarbonka_wplaty`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_wplata_skarbonka` (`id_skarbonki`);

--
-- Indeksy dla tabeli `transakcje`
--
ALTER TABLE `transakcje`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_uzytkownika` (`id_uzytkownika`),
  ADD KEY `id_kategorii` (`id_kategorii`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategorie`
--
ALTER TABLE `kategorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skarbonka`
--
ALTER TABLE `skarbonka`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `skarbonka_wplaty`
--
ALTER TABLE `skarbonka_wplaty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transakcje`
--
ALTER TABLE `transakcje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `skarbonka`
--
ALTER TABLE `skarbonka`
  ADD CONSTRAINT `fk_skarbonka_uzytkownik` FOREIGN KEY (`id_uzytkownika`) REFERENCES `uzytkownicy` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `skarbonka_wplaty`
--
ALTER TABLE `skarbonka_wplaty`
  ADD CONSTRAINT `fk_wplata_skarbonka` FOREIGN KEY (`id_skarbonki`) REFERENCES `skarbonka` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transakcje`
--
ALTER TABLE `transakcje`
  ADD CONSTRAINT `transakcje_ibfk_1` FOREIGN KEY (`id_uzytkownika`) REFERENCES `uzytkownicy` (`id`),
  ADD CONSTRAINT `transakcje_ibfk_2` FOREIGN KEY (`id_kategorii`) REFERENCES `kategorie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
