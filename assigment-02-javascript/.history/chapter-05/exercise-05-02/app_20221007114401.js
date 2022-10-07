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
    }

}

function Floor(building, number) {
    building,
    number,
    rooms = {}
}

function Room(floor, number, company=null) {
    floor, 
    number, 
    company,
    id = floor+number,
    this.getId = function(){
        return id 
    }

}

scrantonBP = new Building("B001", "13927 Saticoy Street, Panorama City");

scrantonBP.addRoom(1, )





