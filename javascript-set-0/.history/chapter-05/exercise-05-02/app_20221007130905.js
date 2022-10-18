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
    this.getFloors = function(){
        return floors
    }
    this.addRoom = function(level, suite, company=null) {
        if (!(level in floors)){
            thisBuilding.addFloor(level)
        }
        let thisFloor = floors[level];
        let 
    }
    this.getRoom = function(level, suite) {
        let theFloor = floors[level];
        let theRoom = theFloor.getRooms()[suite];
        return theRoom
    }

}

function Floor(building, level) {
    thisFloor = this,
    building,
    level,
    rooms = {}
}

function Room(floor, suite, company=null) {
    floor, 
    suite, 
    company
}

scrantonBP = new Building("B001", "13927 Saticoy Street, Panorama City");
scrantonBP.addFloor(1)
console.log(scrantonBP.getFloors())



