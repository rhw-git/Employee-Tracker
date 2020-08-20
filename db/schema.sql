DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE IF NOT EXISTS departments(
  id INT NOT NULL AUTO_INCREMENT, 
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2),
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments (id),
  PRIMARY KEY (id) 
);
CREATE TABLE IF NOT EXISTS employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles (id),
  manager_id INT,
  CONSTRAINT fk_employees FOREIGN KEY (manager_id) REFERENCES employees (id)
  ON DELETE SET NULL,
  PRIMARY KEY (id)
);