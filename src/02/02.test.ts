import {CityType} from "./02_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {buildedAt: 2012, repaired: false, address: {number: 100, street: {title: 'White Street'}}},
            {buildedAt: 1970, repaired: true, address: {number: 55, street: {title: 'Truba'}}},
            {buildedAt: 2021, repaired: false, address: {number: 32, street: {title: 'Bulgakova'}}},
        ],
        govermentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 20000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 50000,
                staffCount: 100,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },

        ],
        citizensNumber: 1000000
    }
});

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White Street');

    expect(city.houses[1].buildedAt).toBe(1970);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(55);
    expect(city.houses[1].address.street.title).toBe('Truba');

    expect(city.houses[2].buildedAt).toBe(2021);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(32);
    expect(city.houses[2].address.street.title).toBe('Bulgakova');
});

test('test city should contains hospital and fire-station', () => {

    expect(city.govermentBuildings[0].type).toBe('HOSPITAL');
    expect(city.govermentBuildings[0].budget).toBe(20000);
    expect(city.govermentBuildings[0].staffCount).toBe(200)
    expect(city.govermentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.govermentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.govermentBuildings[1].budget).toBe(50000);
    expect(city.govermentBuildings[1].staffCount).toBe(100);
    expect(city.govermentBuildings[1].address.street.title).toBe('South Str')
});

