const inquirer = require("inquirer");
const generateSite = require('./utils/generateSite');
const fs = require('fs');
// const Manager = require("./libs/Manager.js");
// const Engineer = require("./libs/Engineer.js");
// const Intern = require("./libs/Intern.js")

// create inquirer prompt to ask what role and then additional questions depending on role selected by user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id number?",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "Please enter the manager's id number.";
            },
            filter: Number
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
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
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: function (officeNumber) {
                var valid = !isNaN(parseFloat(officeNumber));
                return valid || "Please provide the office number";
            },
            filter: Number
        },
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee do you want to add to your team?',
            choices: ['Engineer', 'Intern']
        },
    ])
        .then(function (position) {
            // if they chose Engineer, ask what is their GitHub username?
            if (position.role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the Engineer's github username?",
                        validate: function (githubInput) {
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
                        validate: function (schoolInput) {
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

// const addEmployee = employeeData => {
//     if(!employeeData.teamMember) {
//         employeeData.teamMember = [];
//     }
//     return inquirer.prompt([
//     // do you want to add another employee?
//         {
//             type: 'confirm',
//             name: 'addEmployee',
//             message: 'Would you like to add more employees?',
//             default: true
//         }
//     ])
//         .then(teamMemberData => {
//             employeeData.teamMember.push(teamMemberData) 

//             if(teamMemberData.addEmployee)
//             return addEmployee(employeeData);
//         })

// };

// function to write HTML file and move style sheet to dist folder
function writeToFile(fileName, questions) {
    fileName = fs.writeFile('./dist/index.html', generateSite((questions)), function (err) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('= Webpage created! Check out index.html in dist folder! =');
        }
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('= Style sheet copied to dist folder successfully!')
    })
};
// function to initialize program
function init() {
    questions()
        .then(employee => {
            writeToFile('index.html', employee);
        });
};

// function call to initialize program
init();