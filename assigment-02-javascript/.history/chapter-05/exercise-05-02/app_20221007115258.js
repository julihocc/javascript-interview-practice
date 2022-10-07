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

function Building(id, address) {
    id,
    address,
    floors = {}
    this.addFloor = function(number){
        let newFloor = new Floor(this, number);
        floors[number] = newFloor;
    }
    this.addRoom = function(level, number, company=null) {
        if !(level in floors){
            this.addFloor(level)
        }
        thisFloor = floors[level];
        let newRoom = new Room(thisFlorr, number, company)
        thisFloor.addRoom(newRoom);
    }
    this.getRoom

}

function Floor(building, number) {
    building,
    number,
    rooms = {},
    this.addRoom
}

function Room(floor, number, company=null) {
    floor, 
    number, 
    company
    this.getNumber = function(){
        return number
    }

}

scrantonBP = new Building("B001", "13927 Saticoy Street, Panorama City");

scrantonBP.addRoom(2, "200", "Dunder Mifflin Papaer")
console.log();





