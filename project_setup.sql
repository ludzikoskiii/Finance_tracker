-- ============================================================
--  FINANCE TRACKER - Baza danych (MySQL)
--  Autor  : Jakub Gorczowski | Klasa 3GP
--  Projekt: Aplikacja do zarzadzania budzetem
-- ============================================================

CREATE DATABASE IF NOT EXISTS finance_tracker
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;

USE finance_tracker;

-- ============================================================
--  TABELA 1: uzytkownicy
--  Przechowuje dane kont uzytkownikow aplikacji.
--  Pole 'rola' decyduje o uprawnieniach: user lub admin.
-- ============================================================
CREATE TABLE uzytkownicy (
    id               INT          NOT NULL AUTO_INCREMENT,
    imie             VARCHAR(50)  NOT NULL,
    nazwisko         VARCHAR(80)  NOT NULL,
    email            VARCHAR(150) NOT NULL,
    haslo_hash       VARCHAR(255) NOT NULL,
    rola             ENUM('user', 'admin') NOT NULL DEFAULT 'user',
    data_rejestracji DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    aktywny          TINYINT(1)   NOT NULL DEFAULT 1,

    PRIMARY KEY (id),
    UNIQUE KEY uq_email (email)
);

-- ============================================================
--  TABELA 2: kategorie
--  Przechowuje kategorie transakcji.
--  Ulatwia filtrowanie i analize wydatkow na wykresach.
-- ============================================================
CREATE TABLE kategorie (
    id    INT         NOT NULL AUTO_INCREMENT,
    nazwa VARCHAR(80) NOT NULL,
    typ   ENUM('przychod', 'wydatek') NOT NULL,
    opis  TEXT,

    PRIMARY KEY (id)
);

-- ============================================================
--  TABELA 3: transakcje
--  Glowna tabela aplikacji.
--  Kazda transakcja nalezy do uzytkownika i ma kategorie.
--  Relacje: id_uzytkownika -> uzytkownicy, id_kategorii -> kategorie
-- ============================================================
CREATE TABLE transakcje (
    id               INT           NOT NULL AUTO_INCREMENT,
    id_uzytkownika   INT           NOT NULL,
    id_kategorii     INT           NOT NULL,
    kwota            DECIMAL(10,2) NOT NULL,
    typ              ENUM('przychod', 'wydatek') NOT NULL,
    opis             VARCHAR(255),
    data_transakcji  DATE          NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_uzytkownika) REFERENCES uzytkownicy(id),
    FOREIGN KEY (id_kategorii)   REFERENCES kategorie(id)
);

-- ============================================================
--  DANE PRZYKLADOWE
-- ============================================================

INSERT INTO uzytkownicy (imie, nazwisko, email, haslo_hash, rola) VALUES
    ('Jan',  'Kowalski', 'jan@example.com',  '$2y$12$hash1', 'admin'),
    ('Anna', 'Nowak',    'anna@example.com', '$2y$12$hash2', 'user');

INSERT INTO kategorie (nazwa, typ, opis) VALUES
    ('Wynagrodzenie', 'przychod', 'Pensja z pracy'),
    ('Jedzenie',      'wydatek',  'Zakupy spozywcze'),
    ('Transport',     'wydatek',  'Paliwo, bilety');

INSERT INTO transakcje (id_uzytkownika, id_kategorii, kwota, typ, opis, data_transakcji) VALUES
    (1, 1, 5500.00, 'przychod', 'Pensja marzec',    '2024-03-10'),
    (1, 2,  320.00, 'wydatek',  'Zakupy Biedronka', '2024-03-12'),
    (2, 1, 4200.00, 'przychod', 'Pensja marzec',    '2024-03-10'),
    (2, 3,  150.00, 'wydatek',  'Paliwo',           '2024-03-13');