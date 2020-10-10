// require inquirer npm package
const inquirer = require("inquirer");
const generateSite = require('./utils/generateSite');
const fs = require('fs');

// const Manager = require("../libs/Manager.js");
// const Engineer = require("../libs/Engineer.js");
// const Intern = require("../libs/Intern.js")

// create inquirer prompt to ask what role and then additional questions depending on role selected by user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee? (Required)',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name? (Required)',
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id number?',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log('Please enter the employee id number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email address?',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log('Please enter the employee email address');
                    return false;
                }
            }
        },
    ])

    // if they choose Manager, ask them the following questions:
    // what is your name?
    // what is your id?
    // what is your email?
    // what is your office number?

    // if they choose Engineer, ask them the following questions:
    // what is your name?
    // what is your id?
    // what is your email?
    // what is your GitHub username?

    // if they choose Intern, ask them the following questions:
    // what is your name?
    // what is your id?
    // what is your email?
    // what is the name of the school you graduated from?
}

// function to write HTML file
function writeToFile(fileName, questions) {
    fileName = fs.writeFile('index.html', generateSite((questions)), function (err) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('= HTML file created as index.html! =');
        }
    });
};
// function to initialize program
function init() {
    questions()
        .then(data => {
            console.log(data);
            writeToFile('index.html', data);
    });
};

// function call to initialize program
init();


