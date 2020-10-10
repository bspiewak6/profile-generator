const Engineer = require('../lib/Engineer.js');
// const Employee = require('../lib/Employee.js');

// test to create github username
test('creates a github username', function() {
    const githubUser = "username";
    const employee = new Engineer('Brian', 1, 'test@test.com', githubUser);

    expect(employee.github).toBe(githubUser);
});

// test get GitHub username from getGithub()
test('gets github username from getGithub()', function() {
    const githubUser = "username";
    const employee = new Engineer('Brian', 1, 'test@test.com', githubUser);

    expect(employee.getGithub()).toBe(githubUser)
});

// test getRole to see if its overridden to retunr engineer
test('creates getRole funnction to override and return Engineer', function() {
    const testEng = "Engineer";
    const employee = new Engineer('Brian', 1, 'test@test.com', "username");

    expect(employee.getRole()).toBe(testEng);
});

