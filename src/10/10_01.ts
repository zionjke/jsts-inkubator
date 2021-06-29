export type UserType2 = {
    name: string
    hair: number
    address: {
        title: string
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType2 & {
    laptop: LaptopType
}

export type UserWithBooks = UserType2 & {
    books: Array<string>
}

export type UserWithCompanies = UserType2 & {
    companies: Array<{ id: number, title: string }>
}

export type CompanyType = {
    id:number
    title:string
}

export type CompaniesType = {
    [key:string]: Array<CompanyType>
}

export function makeHairStyle(u: UserType2, power: number) {
    const uCopy = {
        ...u,
        hair: u.hair / power
    }
    // uCopy.hair = uCopy.hair / power
    return uCopy
}

export function moveUser(user: UserType2, newAddress: string) {
    return {
        ...user,
        address: {
            ...user.address,
            title: newAddress
        }
    }

}

export function takeLaptopToUser(user: UserType2, laptopModel: string) {
    const userCopy: UserWithLaptop = {
        ...user,
        laptop: {
            title: laptopModel
        }
    }
    return userCopy
}

export function upgradeUserLaptop(user: UserWithLaptop, model: string) {
    return <UserWithLaptop>{
        ...user,
        laptop: {
            ...user.laptop,
            title: model
        }
    }
}

export function addNewBooksToUser(user: UserWithBooks, newBooks: Array<string>) {
    return <UserWithBooks>{
        ...user,
        books: [
            ...user.books,
            ...newBooks
        ]
    }
}

export function updateBook(user: UserWithBooks, oldBook: string, newBook: string) {
    return <UserWithBooks>{
        ...user,
        books: user.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(user: UserWithBooks, book: string) {
    return <UserWithBooks>{
        ...user,
        books: user.books.filter(b => b !== book)
    }
}

export function updateCompanyTitle(user: UserWithCompanies, companyID: number, newTitle: string) {
    return <UserWithCompanies>{
        ...user,
        companies: user.companies.map(
            c => c.id === companyID
                ? {...c, title: newTitle}
                : c)
    }
}

export function updateCompanyTitle2(companies: CompaniesType, companyId: number, newTitle: string, key: string) {
    return {
        ...companies,
        [key]: companies[key].map((c:CompanyType) => c.id === companyId ? {...c, title: newTitle} : c)
    }
}




