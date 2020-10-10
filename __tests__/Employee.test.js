const Employee = require('../lib/Employee.js');

// test to check for employee name
test('creates an employee name', function() {
    const employee = new Employee('Brian');
    expect(employee.name).toEqual(expect.any(String));
});

// test to create id number for employee
test('creates id number for employee', function() {
    const employee = new Employee('id', 100);
    expect(employee.id).toBe(100); 
});

// test to set email address
test('creates email for employee', function() {
    // const testEmail = "test@test.com";
    const employee = new Employee('email', 100, "test@test.com");
    expect(employee.email).toBe("test@test.com");
});

// test to get employee name from getName
test('get employee name from getName()', function() {
    const testName = "Brian";
    const employee = new Employee(testName);

    expect(employee.getName()).toBe(testName);
});

// test to get employee id from getId
test('get employee id from getId()', function() {
    const testIdFunc = 100;
    const employee = new Employee('id', testIdFunc);

    expect(employee.getId()).toBe(testIdFunc);
});

// test to get employee email address from getEmail
test('get employee email from getEmail()', function() {
    const testEmailFunc = "test@test.com";
    const employee = new Employee('email', 100, testEmailFunc);

    expect(employee.getEmail()).toBe(testEmailFunc);
});

// test to see if getRole returns employee
test('creates getRole function to return Employee', function() {
    const testEmp = "Employee";
    const employee = new Employee("Brian", 100, "test@test.com");

    expect(employee.getRole()).toBe(testEmp);
});