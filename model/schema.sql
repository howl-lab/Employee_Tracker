DROP DATABASE IF EXISTS employeeList_db;

-- row of database instance
-- name of database
CREATE DATABASE employeeList_db;

-- specify database to use for first time running
USE employeeList_db;

-- create table 
-- specify columns and data to hold
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL, 

);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT DEFAULT, 
    FOREIGN KEY (manager_id) REFERENCES (employees),
    FOREIGN KEY (role_id) REFERENCES ()
);