const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager("Dave", "3", "dave@gmail.com", "4")

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe("3");
    expect(manager.email).toBe("dave@gmail.com");
    expect(manager.officeNumber).toBe("4");
})

test('getRole method return "Manager"', () => {
    const manager = new Manager("Dave", "3", "dave@gmail.com", "4")

    expect(manager.getRole()).toBe("Manager");
})

test('getOfficeNumber method return "4"', () => {
    const manager = new Manager("Dave", "3", "dave@gmail.com", "4")

    expect(manager.getOfficeNumber()).toBe("4");
})

