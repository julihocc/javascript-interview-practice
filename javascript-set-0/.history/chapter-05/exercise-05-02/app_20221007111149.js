function Person(id, building, floor, room, pieces) {
    id,
    building,
    floor, 
    room, 
    pieces: []    
}

function Equipment(id, building, floor, room, user) {
    id,
    building, 
    floor,
    room, 
    user
}

function Floor(building, level) {
    building,
    level
}

function Room(floor, number) {
    floor, 
    number
}

function Building(id, address) {
    id,
    address
}