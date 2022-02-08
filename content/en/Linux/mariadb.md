---
title: MariaDB
category: Linux
---

## Basics

```sql
/* Connect to a database */
mysql -u user_name -ppassword database_name

/* Create a database */
CREATE DATABASE db_name;

/* Delete a database */
DROP DATABASE IF EXISTS db_name;

/* Show databases */
SHOW DATABASES;

/* Show a database */
SHOW DATABASES LIKE 'db_name';

/* Change database */
USE db-name;
```

## Tables

```sql
/* Create a table */
CREATE OR REPLACE TABLE table_name (a int);

/* Delete a table */
DROP TABLE tb_1, tb_2;

/* Show tables*/
SHOW TABLES;

/* Display a table */
SHOW TABLE tb_name;

/* Display the columns of a table */
SHOW COLUMNS FROM table_name;
```

## Users

```sql
/* Display users */
SELECT host, user, password FROM mysql.user;

/* Create a user with a password */
CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'password';

/* Create or replace a user with a password */
CREATE OR REPLACE USER 'user_name'@'localhost' IDENTIFIED BY 'password';

/* Show a created user */
SHOW CREATE USER user_name;

/* Delete a user */
DROP USER IF EXISTS 'user_name';
```

## Privileges

```sql
/* Show the privileges of a user */
SHOW GRANTS FOR user_name;

/* Add all privileges to a user */
GRANT ALL PRIVILEGES ON *.* to 'user_name'@'localhost' WITH GRANT OPTION;

/* Assign privileges */
FLUSH PRIVILEGES;

/* Remove privileges from a user */
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user_name'@'localhost';
```
