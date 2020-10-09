const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent Employee constructor using super()
        super(name, id, email);

        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";      
    }
};

module.exports = Engineer;