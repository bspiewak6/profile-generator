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