import {ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Vasyliev Artem', age: 32},
        {name: 'Alexandr Petrov', age: 25},
        {name: 'Dmitriy Sidorov', age: 41},
    ]
})

test('should get array of greeting messages', () => {
    const messages = people.map(p => `Hello in inkubator ${p.name.split(' ')[0]}`)
    expect(messages[0]).toBe('Hello in inkubator Vasyliev')

})
