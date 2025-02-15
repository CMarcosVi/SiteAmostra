CREATE DATABASE IF NOT EXISTS `AmostraDB`;

USE `AmostraDB`;

CREATE TABLE IF NOT EXISTS `Users` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,    -- id auto incrementado (chave primária)
    `id_usuario` INT NOT NULL UNIQUE,                -- id_usuario aleatório gerado no C#
    `NomeCompleto` VARCHAR(255) NOT NULL,            -- Nome completo do usuário
    `DataNascimento` DATE NOT NULL,                  -- Data de nascimento
    `CPF` VARCHAR(11) NOT NULL,                      -- CPF (somente números)
    `Email` VARCHAR(255) NOT NULL,                   -- Email principal
    `NumeroDeCelular` VARCHAR(15) NOT NULL,          -- Número de celular
    `EmailSecundario` VARCHAR(255),                  -- Email secundário
    `Senha` VARCHAR(255) NOT NULL                    -- Senha (preferencialmente criptografada)
);
