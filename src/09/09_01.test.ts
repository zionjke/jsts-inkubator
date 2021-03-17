function increaseAge(user:UserType) {
    user.age++
}

type UserType = {
    name:string
    age:number
}


test('should update user', () => {

    let user = {
        name: 'Artem',
        age: 32
    }

    increaseAge(user)



    expect(user.age).toBe(33)
})
