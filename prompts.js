const inquirer = require('inquirer');
const connection = require('./index')
const seedTable = require('console.table');

const viewOptionsQuestions = [
    {
        message: "What would you like to view?",
        name: "viewOption",
        type: 'list',
        choices: [
            'view all departments',
            'view all roles',
            'view all employee',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'done tabling'
        ]
    }
];

const addDepartmentQuestion = [
    {
        message: "What is the name of the department?",
        name: "departmentName",
        type: 'input'
    }
];

const addEmployeeQuestions = [
    {
        message: 'What is the employees first name?',
        name: 'employeeFirstName',
        type: 'input',
    },
    {
        message: 'What is the employees last name?',
        name: 'employeeLastName',
        type: 'input',
    },
    {
        message: 'What is the employees role?',
        name: 'employeeRole',
        type: 'list',
        choices: [
            'Sales Lead',
            'Salesperson',
            'Account Manager',
            'Patent Agent',
            'Creative Leads',
            'People Ops',
            'Art Director',
            'Lawyer'
        ]
    },
    {
        message: 'Who is the managing the employee?',
        name: 'employeeManager',
        type: 'list',
        choices: [
            'None',
            'Elizabeth Bennet',
            'Atticus Finch',
            'Hermione Granger',
            'Jane Eyre',
            'Sherlock Holmes',
            'Lisbeth Salander',
            'Jo March'
        ]
    },
];


function init() {
    inquirer.prompt(viewOptionsQuestions).then(viewAnswer => {
        if (viewAnswer.viewOption === 'view all departments') {
            viewDepartmentTable();
        } else if (viewAnswer.viewOption === 'view all roles') {
            viewRoleTable();
        } else if (viewAnswer.viewOption === 'view all employee') {
            viewEmployeeTable();
        } else if (viewAnswer.viewOption === 'add a department') {
            inquirer.prompt(addDepartmentQuestion).then(departmentAnswer => {
                addDepartmentToTable(departmentAnswer.departmentName);
            });
        } else if (viewAnswer.viewOption === 'add a role') {
            connection.query('SELECT * FROM department', (err, res) => {
                if (err) throw err;
                const addRoleQuestions = [
                    {
                        message: "What is the name of the role?",
                        name: "title",
                        type: 'input'
                    },
                    {
                        message: "What is the salary of the role?",
                        name: "salary",
                        type: 'input'
                    },
                    {
                        message: "Which department des the role belong to?",
                        name: "department_id",
                        type: 'list',
                        choices: res.map(dept => dept.name)
                    },
                ];
                inquirer.prompt(addRoleQuestions).then(roleAnswers => {
                    console.log('is this undefined?', roleAnswers);
                    addRoleToTable(roleAnswers);
                });
            });
        } else if (viewAnswer.viewOption === 'add an employee') {
            // prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        } else if (viewAnswer.viewOption === 'update an employee role') {
            // prompted to select an employee to update and their new role and this information is updated in the database 
        } else {
            console.log('bye');
            return;
        };
    })
        .catch((error) => {
            console.error(error);
        });
};



function viewDepartmentTable() {
    // console.log('im here')
    connection.connect(err => {
        if (err) {
            console.log(err);
            throw (err);
        }
    });
    connection.query('SELECT * FROM department;', function (err, results) {
        if (err) {
            console.log(err);
        }
        // console.log(results);
        console.table(results);
        init();
    });
};

function viewRoleTable() {
    connection.connect(err => {
        if (err) {
            console.log(err);
            throw (err);
        }
    });
    connection.query('SELECT * FROM role;', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        console.table(results);
        init();
    });
};

function viewEmployeeTable() {
    connection.connect(err => {
        if (err) {
            console.log(err);
            throw (err);
        }
    });
    connection.query('SELECT * FROM employee;', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(results);
        init();
    });
};

function addDepartmentToTable(departmentName) {
    try {
        connection.query(`INSERT INTO department(name) VALUES ('${departmentName}')`, (err, res) => {
            if (err) throw err;
            console.log(res);
        });
        console.log(addDepartmentQuestion.addedDepartment);
    } catch (error) {
        console.log(error);
    }
    init();
};

function addRoleToTable(role) {
    try {
        connection.query(`SELECT id FROM department WHERE name = "${role.department_id}"`, (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.query(`INSERT INTO role(title, salary, department_id) VALUES ('${role.title}', ${role.salary}, ${res[0].id}  )`, (err, response) => {
                if (err) throw err;
                console.log(response);
            });
        })
        // console.log(addDepartmentQuestion.addedDepartment);
    } catch (error) {
        console.log(error);
    }
    init();
};


// Need to write adding employee to table 
// function addEmployeeToTable(employee) {
// };




init();