const fs = require('fs');
const inquirer = require('inquirer');

const path = require('path');
const { inherits } = require('util');

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
            'update an employee role'
        ]
    }
];

// switch(viewAnswer)

function init(viewAnswer) {
    inquirer.prompt(viewOptionsQuestions).then(view => {
        if (viewAnswer === 'view all departments') {
            // function
            // console.log( table showing department names and department ids )
        } else if (viewAnswer === 'view all roles') {
            viewRoleDatas();
            init();
            // console.log( job title, role id, the department that role belongs to, and the salary for that role )
        } else if (viewAnswer === 'view all employee') {
            // console.log( table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to )
        } else if (viewAnswer === 'add a department') {
            // view.push(to the department table)
            // prompted to enter and add the name of the department to database
        } else if (viewAnswer === 'add a role') {
            // prompted to enter the name, salary, and department for the role and that role is added to the database
        } else if (viewAnswer === 'add an employee') {
            // prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        } else if (viewAnswer === 'update an employee role') {
            // prompted to select an employee to update and their new role and this information is updated in the database 

        } else {
            console.log('done viewing');
            return
        };
    })
        .catch((error) => {
            console.error(error);
        });
};

function viewRoleDatas() {
    const roleDatas = db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
        console.table(roleDatas);
    });

};



// function init () {
//     console.log('im here');
//     return goToViewOption;
// };

init();