class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // need to add getName()
    getName() {
        return this.name;
    };

    // need to add getId()
    getId() {
        return this.id;
    };
    // need to add getEmail()
    getEmail() {
        return this.email;
    };
    // need to add getRole() which returns Employee
    getRole() {
        return "Employee";
    };
};

module.exports = Employee;
