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
        name: "addedDepartmentQuery",
        type: 'input'
    }
];

const addRoleQuestions = [
    {
        message: "What is the name of the role?",
        name: "addedRoleQuery",
        type: 'input'
    },
    {
        message: "What is the salary of the role?",
        name: "addedSalaryQuery",
        type: 'input'
    },
    {
        message: "Which department des the role belong to?",
        name: "roleDepartmentQuery",
        type: 'list',
        choices: [
            'Engineering',
            'Finance',
            'Legal',
            'Sales',
            'Service'
        ]
    },
];

const addEmployeeQuestions = [
    {
        message: 'What is the employees first name?',
        name: 'employeeFirstNameQuery',
        type: 'input',
    },
    {
        message: 'What is the employees last name?',
        name: 'employeeLastNameQuery',
        type: 'input',
    },
    {
        message: 'What is the employees role?',
        name: 'employeeRoleQuery',
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
        name: 'employeeManagerQuery',
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

//questions for update employee role

// switch(viewAnswer)

function init() {
    inquirer.prompt(viewOptionsQuestions).then(viewAnswer => {
        if (viewAnswer.viewOption === 'view all departments') {
            viewDepartmentTable();
        } else if (viewAnswer.viewOption === 'view all roles') {
            viewRoleTable();
        } else if (viewAnswer.viewOption === 'view all employee') {
            viewEmployeeTable();
        } else if (viewAnswer.viewOption === 'add a department') {
            addDepartmentQuery(addDepartmentQuestion);
            // prompted to enter and add the name of the department to database
        } else if (viewAnswer.viewOption === 'add a role') {
            // prompted to enter the name, salary, and department for the role and that role is added to the database
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

function addDepartmentQuery() {
    const insertDepartmentTable = 'INSERT INTO department(name) VALUES (?);';
    try {
        const addDepartmentToList = connection.query(insertDepartmentTable, addDepartmentQuestion.addedDepartment);
        console.log(addDepartmentQuestion.addedDepartment);
    } catch (error) {
        console.log(error);
    }

};


// function init () {
//     console.log('im here');
//     return goToViewOption;
// };

init();