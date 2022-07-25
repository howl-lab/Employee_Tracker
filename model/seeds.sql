USE employeeList_db;

INSERT INTO department (name)
VALUES ('Creative'),
('Legal'),
('Engineering'),
('Finance');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Account Manager', 150000, 1),
('Patent Agent', 120000, 1),
('Creative Leads', 160000, 1),
('People Ops', 125000, 1),
('Art Director', 250000, 1),
('Lawyer', 190000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Elizabeth', 'Bennet', 1, null),
('Atticus', 'Finch', 2, 1),
('Hermione', 'Granger', 3, null),
('Jane', 'Eyre', 4, 3),
('Sherlock', 'Holmes', 5, null),
('Holden', 'Caulfield', 6, 5),
('Lisbeth', 'Salander', 7, null),
('Jo', 'March', 8, 7);