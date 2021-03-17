type ObjType = {
    [key: string]: { id: number, name: string }
}

const obj: ObjType = {
    '101': {id: 101, name: 'Dimych'},
    '102': {id: 102, name: 'Temich'},
    '103': {id: 103, name: 'Kabanich'},
    '104': {id: 104, name: 'Mihalich'},
}
let user = {id: 105, name: 'Levanich'}

obj[user.id] = user

const objArray = [
    {id: 101, name: 'Dimych'},
    {id: 102, name: 'Temich'},
    {id: 103, name: 'Kabanich'},
    {id: 104, name: 'Mihalich'}
]

