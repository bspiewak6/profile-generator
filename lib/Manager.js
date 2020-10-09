const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // call parent Employee constructor using super()
    super(name, id, email);

    this.officeNumber = officeNumber;
    }

getRole() {
    return "Manager";
    }
}

module.exports = Manager;
