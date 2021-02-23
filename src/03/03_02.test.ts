import {CityType} from "../02/02_02";
import {addMoneyToBudget, demolishHousesOnTheStreet, greetingMessage, repairHouse, toFireStaff} from "./03_02";


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


test('Budget should be changed for HOSPITAL', () => {
    expect(city.govermentBuildings[0].budget).toBe(20000);
    addMoneyToBudget(city.govermentBuildings[0], 50000);
    expect(city.govermentBuildings[0].budget).toBe(70000);
})


test('Budget should be changed for FIRE-STATION', () => {
    expect(city.govermentBuildings[1].budget).toBe(50000);
    addMoneyToBudget(city.govermentBuildings[1], -20000);
    expect(city.govermentBuildings[1].budget).toBe(30000);
})


test('House should be identificate', () => {
    demolishHousesOnTheStreet(city.houses, 'Truba');
    expect(city.houses[1].id).toBe(1);
    demolishHousesOnTheStreet(city.houses, 'Bulgakova');
    expect(city.houses[2].id).toBe(2);

});

test('House should be repaired', () => {
    repairHouse(city.houses[0]);
    expect(city.houses[0].repaired).toBeTruthy() // toBe(true)
});

test('staff should be increased', () => {
    toFireStaff(city.govermentBuildings[0], 20);
    expect(city.govermentBuildings[0].staffCount).toBe(180);
});


test('Message Greeting', () => {
    let message = greetingMessage(city, 'Hello')
    expect(message).toBe('Hello New York')
});
