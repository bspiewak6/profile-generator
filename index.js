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
            type: 'input',
            name: 'name',
            message: 'What is the employee name? (Required)',
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id number? (Required)",
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "Please enter the id number of the employee.";
                },
                filter: Number
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address? (Required)",
            validate: emailInput => {
                if (emailInput.includes('.com') && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('\n You must enter a valid email address.');
                    return false;
                }
            }
        },  
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee? (Required)',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])
    .then(function(position) {
        // if they chose Manager, ask what is their office number?
        if(position.role === "Manager") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the Manager's office number?",
                    validate: function(value) {
                        var valid = !isNaN(parseFloat(value));
                        return valid || "Please provide the office number";
                    },
                    filter: Number
                }
            ])
        }
        // if they chose Engineer, ask what is their GitHub username?
        else if (position.role === "Engineer") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the Engineer's github username?",
                    validate: function(githubInput) {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Please provide the GitHub username for the Engineer.");
                        }
                    }
                }
            ])
        }
        // if they chose Intern, ask what school they go to or graduated from
        else if (position.role === "Intern") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the name of the Intern's school they attend or have graduated from?",
                    validate: function(schoolInput) {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("Please provide the name of the intern's school.");
                        }
                    }
                }
            ])
        }
    })
};

// function to write HTML file
function writeToFile(fileName, questions) {
    fileName = fs.writeFile('./dist/index.html', generateSite((questions)), function (err) {
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
        .then(employee => {
            console.log(employee);
            writeToFile('index.html', employee);
    });
};

// function call to initialize program
init();
