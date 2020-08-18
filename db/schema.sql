DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE departments(
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE roles (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(5,2),
  department_id UNSIGNED NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY
    (department_id) REFERENCES departments (id) 
);
CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER UNSIGNED NOT NULL,
  manager_id INTEGER UNSINGED,
  CONSTRAINT fk_role FOREIGN KEY
    (role_id) REFERENCES roles (id)
  CONSTRAINT fk_employee FOREIGN KEY 
    (manager_id) REFERENCES id
    ON DELETE SET NULL
);