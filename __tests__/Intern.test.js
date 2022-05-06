const Intern = require("../lib/Intern");

test('creates new Intern object', () => {
    const intern = new Intern('kayla', "7", "k@gmail.com", "UT")

    expect(intern.name).toBe("kayla")
    expect(intern.id).toBe("7")
    expect(intern.email).toBe("k@gmail.com")
    expect(intern.school).toBe("UT")
})

test("getSchool method return UT", () => {
    const intern = new Intern('kayla', "7", "k@gmail.com", "UT",() => {
        expect(intern.getSchool()).toBe('UT');
    })

    
})

test("getRole method returns 'Intern'", () => {
    const intern = new Intern('kayla', "7", "k@gmail.com", "UT")
    expect(intern.getRole()).toBe('Intern');
    
})