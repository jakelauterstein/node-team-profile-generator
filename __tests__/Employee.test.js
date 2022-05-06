const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jake','4', 'jakelauterstein@gmail.com');

    expect(employee.name).toBe('Jake');
    expect(employee.id).toBe('4');
    expect(employee.email).toBe('jakelauterstein@gmail.com');

})

test('get name method returns name', () => {
    const employee = new Employee('Jake','4', 'jakelauterstein@gmail.com');
    expect(employee.getName()).toBe('Jake');
})

test('get id method returns id', () => {
    const employee = new Employee('Jake','4', 'jakelauterstein@gmail.com');
    expect(employee.getId()).toBe('4');
})

test('get email method returns email', () => {
    const employee = new Employee('Jake','4', 'jakelauterstein@gmail.com');
    expect(employee.getEmail()).toBe('jakelauterstein@gmail.com');
})

test('get role method returns role', () => {
    const employee = new Employee('Jake','4', 'jakelauterstein@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})