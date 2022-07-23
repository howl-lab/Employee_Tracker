USE employeeList_db;

INSERT INTO department (id, name)
VALUES (1, Creative),
(2, Legal),
(3, Engineering),
(4, Finance);

INSERT INTO role (id, title, salary, department_id)
VALUES (1, Sales Lead, 100000, Sales),
(2, Salesperson, 80000, Sales),
(3, Account Manager, 150000, Finance),
(4, Patent Agent, 120000, Legal),
(5, Creative Leads, 160000, Creative),
(6, People Ops, 125000, Finance),
(7, Art Director, 250000, Creative),
(8, Lawyer, 190000, Legal);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (Elizabeth, Bennet, 1, 1),
(Atticus, Finch, 2, NULL),
(Hermione, Granger, 3, 4),
(Jane, Eyre, 4, NULL),
(Sherlock, Holmes 5, 3),
(Holden, Caulfield, 6, 2),
(Lisbeth, Salander, 7, NULL),
(Jo, March, 8, 1);

