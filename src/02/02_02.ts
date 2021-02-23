export type CityType = {
    title: string,
    houses: Array<HousesType>,
    govermentBuildings: Array<GovermentBuildings>,
    citizensNumber: number
}

export type HousesType = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: HousesAddressType
}


export type HousesAddressType = {
    number: number
    street: AddressType
}

export type AddressType = {
    title: string
}


export type GovermentBuildings = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address:GovermentBuildingsAddress
}

export type GovermentBuildingsAddress = {
    street:AddressType
}

