function Building(id, address) {
    thisBuilding = this;
    id,
    address,
    floors = {},
    this.assignFloorToRoom = function(suite) {
         return Math.floor(suite/100)
    }
    this.addRoom = function(suite, company=null) {
    }
    
}

function Room(suite, company=null) {
    this.suite = suite, 
    this.company = company
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


