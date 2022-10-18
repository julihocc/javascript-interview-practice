function Building(id, address) {
    thisBuilding = this;
    id,
    address,
    floors = {},
    this.assignLevelToSuit = function(suite) {
         return Math.floor(suite/100)
    }
    this.addFloor = function(level){
        let newFloor = new Floor(thisBuilding, level);
        floors[level] = newFloor;
    }
    this.getFloors = function(){
        return floors
    }
    this.addRoom = function(suite, company=null) {
        let level = this.assignLevelToSuit(suit);
        if (!(level in floors)){
            thisBuilding.addFloor(level)
        }
        let thisFloor = floors[level];
        let newRoom = new Room(thisFloor, suite, company)
        thisFloor.addRoom(newRoom);
    }
    this.getRoom = function(suite) {
        let level = Math.floor(suite/100);
        let theFloor = floors[level];
        let theRoom = theFloor.getRooms()[suite];
        return theRoom
    }
    this.printDirectory = function() {
        for (level in floors) {
            console.log(`Floor #${level}`)
            thisFloor = floors[level];
            for (suite in thisFloor.getRooms()){
                thisRoom = rooms[suite];
                console.log(`Suite #${suite}: ${thisRoom.getCompany()}`);
            }
        }
    }

}

function Floor(building, level) {
    thisFloor = this,
    building,
    level,
    rooms = {}
    this.addRoom = function(room){
        suite = room.getSuite();
        rooms[suite] = room;
    }
    this.getRooms = function(){
        return rooms
    }
}

function Room(floor, suite, company=null) {
    floor, 
    suite, 
    company,
    this.getFloor = function() {
        return floor
    }
    this.getSuite = function() {
        return suite
    } 
    this.getCompany = function() {
        return company
    }
}

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

sbp = new Building("Scranton Business Park", "13927 Saticoy Street, Panorama City");
sbp.addRoom(200, "Dunder Mifflin Ppaper")
dmp = sbp.getRoom(200)
console.log(dmp.getCompany());
sbp.printDirectory()




