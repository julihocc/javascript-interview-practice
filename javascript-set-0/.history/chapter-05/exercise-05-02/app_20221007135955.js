function Building(id, address) {
    thisBuilding = this;
    id,
    address,
    floors = {},
    this.addRoom = function(suite, company=null) {
        let newRoom = new Room(suite, company);
        let level = Math.floor(suite/100);
        if (!(level in floors)){
            floors[level] = [];
        }
        floors[level].push(newRoom)
    }
    this.printDirectory = function(){
        for (level in floors){
            let 
        }
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
sbp.addRoom(200, "Dunder Mifflin Paper")
sbp.printDirectory()


