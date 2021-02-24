type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: AddressType
}

type LessonType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type StreetType = {
    title: string
}

let man: ManType

beforeEach(() => {

    man = {
        name: 'Artem',
        age: 32,
        lessons: [
            {title: '1'},
            {title: '2'},
            {title: '3'},
        ],
        address: {
            street: {
                title: 'Bulgakova street'
            }
        }
    }

})

test('some test', () => {


    const {age, lessons} = man

    const a = man.age
    const l = man.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(a).toBe(32)
    expect(l.length).toBe(3)

})


test('', () => {

    const ls1 = man.lessons[0]
    const ls2 = man.lessons[1]

    const [l1, l2] = man.lessons
    const [,les2,...rest] = man.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(les2.title).toBe('2')
    expect(rest.length).toBe(1)
    expect(rest[0]).toStrictEqual({title: '3'})
})
