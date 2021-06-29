import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    removeBook,
    takeLaptopToUser,
    updateBook,
    updateCompanyTitle2,
    upgradeUserLaptop,
    UserWithBooks
    ,
    UserWithCompanies,
    UserWithLaptop
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
    const userWithNewBooks = updateBook(user, '1', '7')
    const filteredBooks = removeBook(user,'2')

    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutUser.address.title).not.toBe(userWithNewAddress.address.title)
    expect(cutUser.address.title).toBe('Kiyv')
    expect(userWithNewAddress.address.title).toBe('Minsk')
    expect(userWithNewLaptop.laptop.title).toBe('asus')
    expect(userWithMacbook.laptop.title).toBe('Macbook')
    expect(userWithBooks.books[2]).toBe('3')
    expect(userWithNewBooks.books[0]).toBe('7')
    expect(filteredBooks.books.length).toBe(1)
})


test('second test', () => {


    let companies = {
        'Artem': [{id: 1, title: 'Epam'}],
        'Dimych': [{id: 2, title: 'KLO'}]
    }


    const newCompanyTitle = updateCompanyTitle2(companies, 1, 'SILPO', 'Artem')
    expect(newCompanyTitle['Artem'][0].title).toBe('SILPO')

})
