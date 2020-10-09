const Manager = require('../lib/Manager.js');
// const Employee = require('../lib/Employee.js');

// test to create office number
test('creates an office number for manager', function() {
    const officeNum = 100;
    const employee = new Manager('Brian', 1, 'test@test.com', officeNum);

    expect(employee.officeNumber).toBe(officeNum);    
});

// test getRole to see if its overriden to return manager
test('creates getRole function to override and return Manager', function() {
    const testMan = "Manager";
    const employee = new Manager('Brian', 1, 'test@test.com', 100);

    expect(employee.getRole()).toBe(testMan);
});