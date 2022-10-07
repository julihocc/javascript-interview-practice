function Person(id, building, floor, room, pieces) {
    id,
    building,
    floor, 
    room, 
    pieces = []    
}

function Equipment(id, building, floor, room, user) {
    id,
    building, 
    floor,
    room, 
    user
}

function Floor(building, number) {
    building,
    number
}

function Room(floor, number) {
    floor, 
    number
}

function Building(id, address) {
    id,
    address,
    this.addFloor = function(number)
}

scrantonBP = new Building("B001", "13927 Saticoy Street, Panorama City")



