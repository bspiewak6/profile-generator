const inquirer = require('inquirer');
const generateSite = require('./utils/generateSite');
const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// hold team member when the app is running -- array to feed into generateSite
const employees = [];

// create questions array to build team
const questions = {
    // questions for manager position
    manager: [
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
            type: 'number',
            name: 'id',
            message: "What is the manager's id number?",
            validate: function (idInput) {
                var valid = !isNaN(parseFloat(idInput));
                return valid || "Please enter the employee's id number.";
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
                    console.log('\n Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: function (numberInput) {
                var valid = !isNaN(parseFloat(numberInput));
                return valid || "Please provide the office number";
            },
            filter: Number
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Do you want to add another team member?',
            default: false
        },
    ],
    // questions for engineer position
    engineer: [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's id number?",
            validate: function (idInput) {
                var valid = !isNaN(parseFloat(idInput));
                return valid || "Please enter the engineer's id number.";
            },
            filter: Number
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: emailInput => {
                if (emailInput.includes('.com') && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('\n Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: function (githubName) {
                if (githubName) {
                    return true;
                } else {
                    console.log("Please provide the Engineer's GitHub username");
                }
            }
        }   
    ],
    // questions for intern position
    intern: [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's id number?",
            validate: function (idInput) {
                var valid = !isNaN(parseFloat(idInput));
                return valid || "Please enter the intern's id number.";
            },
            filter: Number
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: emailInput => {
                if (emailInput.includes('.com') && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('\n Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?",
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    console.log("Please provide the name of the intern's school.");
                }
            }
        }
    ]
};

// Manager function to get answers
const addManager = () => {
    return inquirer
        .prompt(questions.manager)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);
            addEmployee();
        })
};

// Engineer function to get answers
const addEngineer = () => {
    return inquirer
        .prompt(questions.engineer)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            // add in github question above in questions array!
            employees.push(engineer);
            addEmployee();
    })
};

// Intern function to get answers
const addIntern = () => {
    return inquirer
        .prompt(questions.intern)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            // add in school question above in questions array!
            employees.push(intern);
            addEmployee();
    })
};

// add function to build team
const makeTeam = (fileName) => {
        fileName = fs.writeFile('./dist/index.html', generateSite(employees), err => {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('= Webpage created! Check out index.html in dist folder! =');
            }
        });
};

const addEmployee = () => {
    return inquirer
        .prompt({ 
            type: 'list',
            name: 'newEmployee',
            message: 'Do you want to add another employee?',
            choices: ['Engineer', 'Intern', 'Complete Team Builder']
        })
        .then(answers => {
            switch (answers.newEmployee) {
                case 'Engineer': 
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;   
                case 'Complete Team Builder':
                    makeTeam();
                    break; 
            }
        });
};

addManager();


