import {CityType, GovermentBuildings, HousesType} from "../02/02_02";

export const addMoneyToBudget = (building: GovermentBuildings, budget: number) => {
    building.budget += budget
};

let id = 1;
export const demolishHousesOnTheStreet = (houses: Array<HousesType>, street: string) => {
    houses.filter(h => {
        if (h.address.street.title !== street) {
            return;
        }
        h.id = id;
    });
    id++
};


export const repairHouse = (house: HousesType) => {
    house.repaired = true;
};

export const toFireStaff = (govermentBuilding: GovermentBuildings, staffCount: number) => {
    govermentBuilding.staffCount -= staffCount
};

export const greetingMessage = (city:CityType,message:string) => {
     return (`${message} ${city.title}`)
};
