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
        if (!(level in floors) ){}
            this.addFloor(level)
        }
        thisFloor = floors[level];
        let newRoom = new Room(thisFlorr, number, company)
        thisFloor.addRoom(newRoom);
    }
    this.getRoom = function(level, suite) {
        theFloor = floors[level];
        theRoom = theFloor.getRooms()[suite];
        return theRoom
    }

}

function Floor(building, level) {
    building,
    level,
    rooms = {},
    this.getRooms = function() {
        return rooms;
    }
}

function Room(floor, suite, company=null) {
    floor, 
    suite, 
    company
    this.getSuite = function(){
        return suite 
    }

}

scrantonBP = new Building("B001", "13927 Saticoy Street, Panorama City");

scrantonBP.addRoom(200, "Dunder Mifflin Papaer")
console.log();





