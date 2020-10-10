const Intern = require('../lib/Intern.js');
// const Employee = require('../lib/Employee.js');

// test to create school
test('creates a school name for intern', function() {
    const schoolInput = "Penn";
    const employee = new Intern('Brian', 1, 'test@test.com', schoolInput);

    expect(employee.school).toBe(schoolInput);    
});

// test get school name from getSchool()
test('gets school name from getSchool()', function() {
    const schoolName = "Penn";
    const employee = new Intern('Brian', 1, 'test@test.com', schoolName);

    expect(employee.getSchool()).toBe(schoolName)
});

// test getRole to see if its overridden to return Intern
test('creates getRole funnction to override and return Intern', function () {
    const testInt = "Intern";
    const employee = new Intern('Brian', 1, 'test@test.com', "Penn");

    expect(employee.getRole()).toBe(testInt);
});
