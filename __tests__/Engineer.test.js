const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('https://github.com/jakelauterstein')

    expect(engineer.github).toBe('https://github.com/jakelauterstein')
})

test('getGithub method returns github', () => {
    const engineer = new Engineer('https://github.com/jakelauterstein')

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('getRole method returns Engineer', () => {
    const engineer = new Engineer('https://github.com/jakelauterstein')

    expect(engineer.getRole()).toBe('Engineer')
})