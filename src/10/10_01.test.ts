import {
    addNewBooksToUser, makeHairStyle, moveUser, takeLaptopToUser, upgradeUserLaptop,
    UserWithBooks
    , UserWithCompanies, UserWithLaptop
} from "./10_01"


test('test1', () => {
    let user: UserWithLaptop & UserWithBooks & UserWithCompanies = {
        name: "Artem",
        hair: 32,
        address: {
            title: 'Kiyv'
        },
        laptop: {
            title: 'MSI'
        },
        books: ['1', '2'],
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'KLO'}
        ]
    }

    const cutUser = makeHairStyle(user, 2)
    const userWithNewAddress = moveUser(user, 'Minsk')
    const userWithNewLaptop = takeLaptopToUser(user, 'asus')
    const userWithMacbook = upgradeUserLaptop(user, 'Macbook')
    const userWithBooks = addNewBooksToUser(user, ['3', '4'])

    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutUser.address.title).not.toBe(userWithNewAddress.address.title)
    expect(cutUser.address.title).toBe('Kiyv')
    expect(userWithNewAddress.address.title).toBe('Minsk')
    expect(userWithNewLaptop.laptop.title).toBe('asus')
    expect(userWithMacbook.laptop.title).toBe('Macbook')
    expect(userWithBooks.books[2]).toBe('3')
})


test('second test', () => {


    let companies = {
        'Artem': [{id: 1, title: 'Epam'}],
        'Dimych': [{id: 2, title: 'KLO'}]
    }

    function updateCompanyTitle2(companies: any, companyId: number, newTitle: string, key: string) {
        return {
            ...companies,
            [key]: companies[key].map(c => c.id === companyId ? {...c, title: newTitle} : c)
        }
    }

    const newCompanyTitle = updateCompanyTitle2(companies,1,'SILPO','Artem')
    expect(newCompanyTitle['Artem'][0].title).toBe('SILPO')

})
