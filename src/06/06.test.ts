test('some test', () => {

    let man = {
        name: 'Artem',
        age: 32,
        lessons: [
            {title: '1'},
            {title: '2'}
        ]
    }

    const {age,lessons} = man

    const a = man.age
    const l = man.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(a).toBe(32)
    expect(l.length).toBe(2)

})
