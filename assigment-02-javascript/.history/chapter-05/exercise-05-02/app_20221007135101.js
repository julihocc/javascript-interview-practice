function Building(id, address) {
    thisBuilding = this;
    id,
    address,
    floors = {},
    this.assignLevelToSuit = function(suite) {
         return Math.floor(suite/100)
         
    this.addRoom = function(suite, company=null) {
        let level = this.assignLevelToSuit(suite);
        console.log(level)
        if (!(level in floors)){
            thisBuilding.addFloor(level)
        }
        let thisFloor = floors[level];
        let newRoom = new Room(thisFloor, suite, company)
        thisFloor.addRoom(newRoom);
    }
    this.getRoom = function(suite) {
        let level = this.assignLevelToSuit(suite);
        let theFloor = floors[level];
        let theRoom = theFloor.getRooms()[suite];
        return theRoom
    }
    this.printDirectory = function() {
        for (let level in floors) {
            console.log(`Floor #${level}`)
            let thisFloor = floors[level];
            console.log(thisFloor)
            let thisRooms = thisFloor.getRooms()
            console.log(thisRooms)
            for (let suite in thisRooms){
                let thisRoom = thisRooms[suite];
                console.log(`Suite #${suite}: ${thisRoom.getCompany()}`);
            }
        }
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
sbp.addRoom(110, "W.B. Jones Heating & Air")
sbp.addRoom(200, "Dunder Mifflin Ppaper")
// sbp.addRoom(210, "Vance Refrigeration")
// sbp.printDirectory()

console.log( sbp.getFloors()[1].getRooms()[110].getCompany() )


