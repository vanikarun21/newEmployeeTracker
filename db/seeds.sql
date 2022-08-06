
USE empTracker;



INSERT INTO department (department_name)
VALUES ('SALES');

INSERT INTO department (department_name)
VALUES ('ENGINEERING');

INSERT INTO department (department_name)
VALUES ('FINANCE');

INSERT INTO department (department_name)
VALUES ('LEGAL');

-- role salesperson, lead engineer, software engineer, account manager, tech acct mgr, legal team lead, lawyer
INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ('Lead Engineer', 145000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Technolgy Account Manager', 105000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Finance Analyst', 75000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Finance Manager', 140000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 185000, 4);

-- employee

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sarah', 'Engstad',6,null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Chris', 'George',7,null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Matt', 'Grey',1,1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe',5,1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Laurie', 'Roberts',2,null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Doe',3,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Pat', 'West',4,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kim', 'Dahlberg',1,1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kabao', 'Johnson',1,1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dan', 'Greg',1,1);

