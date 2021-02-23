export type TechnologiesType = {
    id:number,
    title:string
}

export type AddressType = {
    streetTitle:string
    city: LocalCityType
}

export type LocalCityType = {
    title:string
    countryTitle:string
}

export type StudentType = {
    id: number,
    name:string
    age:number
    isActive:boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}





export const student:StudentType = {
    id:1,
    "name": 'Artem',
    "age": 32,
    isActive: false,
    address: {
        streetTitle: 'Trublaini',
        city: {
            title: 'Kiev',
            countryTitle: 'Ukraine'
        }
    },
    technologies: [
        {id: 1, title: 'Html'},
        {id: 2, title: 'JS'},
        {id: 3, title: 'React'}
    ]
};

export const school = {
    name: 'IT-Incubator',
    isOpen: true,
    mentors: []
};


