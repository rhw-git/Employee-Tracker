INSERT INTO departments (name)
VALUES
  ("Finance"),
  ("Sales"),
  ("Engineering"),
  ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES
  ("Sales Lead", 100000.00, 2),
  ("Salesperson", 80000.00, 2),
  ("Lead Engineer", 150000.00, 3),
  ("Software Engineer", 120000.00, 3),
  ("Accountant", 125000.00, 1),
  ("Legal Team Lead", 250000.00, 4),
  ("Lawyer", 190000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("John", "Doe", 3, NULL),
  ("Mike", "Chan", 1, NULL),
  ("Ashley", "Rodriguez", 5, NULL),
  ("Kevin", "Tupik", 2, 1),
  ("Sarah", "Lourd", 4, 3),
  ("Tom", "Allen", 6, NULL),
  ("Malia", "Brown", 7, 6);

  