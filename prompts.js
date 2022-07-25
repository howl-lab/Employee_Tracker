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



// function init () {
//     console.log('im here');
//     return goToViewOption;
// };

init();