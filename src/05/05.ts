export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Vasyliev Artem', age: 32},
    {name: 'Alexandr Petrov', age: 25},
    {name: 'Dmitriy Sidorov', age: 41},
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Vasyliev',
        lastName: 'Artem'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexandr',
        lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitriy',
        lastName: 'Sidorov'
    },


]

const devs2 = people.map((man) => (
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        age: man.age,
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
))

const messages = people.map(p => `Hello in inkubator ${p.name.split(' ')}`)
