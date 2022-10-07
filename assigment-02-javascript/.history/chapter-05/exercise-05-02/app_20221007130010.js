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
    thisBuilding = this;
    id,
    address,
    floors = {}
    this.addFloor = function(level){
        let newFloor = new Floor(thisBuilding, level);
        floors[level] = newFloor;
    }
    this.addRoomToBuilding = function(level, suite, company=null) {
        if (!(level in floors)){
            thisBuilding.addFloor(level)
        }
        thisFloor = floors[level];
        thisFloor.addRoomToFloor(suite, company);
    }
    this.getRoom = function(level, suite) {
        theFloor = floors[level];
        theRoom = theFloor.getRooms()[suite];
        return theRoom
    }

}

function Floor(building, level) {
    thisFloor = this,
    building,
    level,
    rooms = {},
    this.getRooms = function() {
        return rooms;
    }
    this.addRoomToFloor = function(suite, company) {
        let newRoom = new Room(thisFloor, suite, company);
        console.log(thisFloor)
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






