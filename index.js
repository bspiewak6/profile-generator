const inquirer = require("inquirer")
// require manager, engineer & intern


// create inquirer prompts depening on role selected by user

function promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is your role on the team?",
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
}

promptUser()