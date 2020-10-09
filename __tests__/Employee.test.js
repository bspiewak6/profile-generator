const Employee = require('../lib/Employee.js');

// test to check for employee object
test('creates an employee object', function() {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');    
});

// test to check for employee name
test('creates an employee name', function() {
    const name = 'Brian';
    const employee = new Employee(name);
    
    expect(employee.name).toBe(name);
});

// test to create id number for employee
test('creates id number for employee', function() {
    const testId = 100;
    const employee = new Employee('id', testId);
    
    expect(employee.id).toBe(testId); 
});

// test to set email address
test('creates email for employee', function() {
    const testEmail = "test@test.com";
    const employee = new Employee('email', 100, testEmail);

    expect(employee.email).toBe(testEmail);
});