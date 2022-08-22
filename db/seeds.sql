INSERT INTO departments (id, name)
VALUES  (1, "Finance"),
        (2, "Engineering"),
        (3, "Legal"),
        (4, "Sales");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, "Account Manager", 150000, 1),
        (2, "Accountant", 80000, 1),
        (3, "Lead Engineer", 180000, 2),
        (4, "Software Engineer", 100000, 2),
        (5, "Web Developer", 80000, 2),
        (6, "Legal Team Lead", 200000, 3),
        (7, "Lawyer", 120000, 3),
        (8, "Sales Lead", 160000, 4),
        (9, "Salesperson", 60000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Carson", "Mock", 1, null),
        (2, "Maria", "Sal", 2, 1),
        (3, "Alex", "Germann", 3, null),
        (4, "Hannah", "Kim", 4, 3),
        (5, "Hank", "Small", 4, 3),
        (6, "Hakher", "Mahn", 5, 3),
        (7, "Eun", "Lulu", 6, null),
        (8, "Saul", "Goodman", 7, 7),
        (9, "Delbert", "Wichelhaus", 8, null),
        (10, "Mitch", "Barnett", 9, 9);