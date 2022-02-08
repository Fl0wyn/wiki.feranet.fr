---
title: MariaDB
category: Linux
---

## Bases

```sql
/* Se connecter à une base de donnée */
mysql -u user_name -ppassword database_name

/* Créer une base de donnée */
CREATE DATABASE db_name;

/* Supprimer une base de donnée */
DROP DATABASE IF EXISTS db_name;

/* Afficher les bases */
SHOW DATABASES;

/* Afficher une base */
SHOW DATABASES LIKE 'db_name';

/* Changer de base */
USE db-name;
```

## Tables

```sql
/* Créer une table */
CREATE OR REPLACE TABLE table_name (a int);

/* Supprimer une table */
DROP TABLE tb_1, tb_2;

/* Afficher les tables */
SHOW TABLES;


/* Afficher une table */
SHOW TABLE tb_name;

/* Afficher les colones d'une table */
SHOW COLUMNS FROM table_name;
```

## Utilisateurs

```sql
/* Afficher les utilisateurs */
SELECT host, user, password FROM mysql.user;

/* Créer un utilisateur avec un mot de passe */
CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'password';

/* Créer ou remplacer un utilisateur avec un mot de passe */
CREATE OR REPLACE USER 'user_name'@'localhost' IDENTIFIED BY 'password';

/* Afficher un utilisateur crée */
SHOW CREATE USER user_name;

/* Supprimer un utilisateur */
DROP USER IF EXISTS 'user_name';
```

## Privilèges

```sql
/* Afficher les privilèges d'un utilisateur */
SHOW GRANTS FOR user_name;

/* Ajouter tous les privilèges à un utilisateur */
GRANT ALL PRIVILEGES ON  *.* to 'user_name'@'localhost' WITH GRANT OPTION;

/* Assigner les privilèges */
FLUSH PRIVILEGES;

/* Supprimer les privilèges d'un utilisateurs */
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user_name'@'localhost';
```
