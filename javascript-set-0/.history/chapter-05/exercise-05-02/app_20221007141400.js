function Building(id, address) {

    thisBuilding = this;
    id,
    address,
    floors = {},

    this.addRoom = function(suite, company=null) {
        let level = Math.floor(suite/100);
        let newRoom = new Room(suite, company, level);
        if (!(level in floors)){
            floors[level] = [];
        }
        floors[level].push(newRoom)
    }

    this.printDirectory = function(){
        for (level in floors){
            let thisFloor = floors[level];
            console.log(`---- Floor #${level}`)
            for (let room in thisFloor) {
                let thisRoom = thisFloor[room]
                console.log(thisRoom.suite, thisRoom.company)
            }
        }
    }

    this.assignEquipment = function(id, model, ) {

    }
}

function Room(suite, company=null, floor=null) {
    this.suite = suite, 
    this.company = company,
    this.floor = floor
}

function Person(id, building, floor, room, pieces = []) {
    this.id = id,
    this.building = building,
    this.floor = floor, 
    this.room = room, 
    this.pieces = pieces    
}

function Equipment(building, id, room) {
    this.building = building,
    this.id = id,
    this.room = room 
}

sbp = new Building("Scranton Business Park", "13927 Saticoy Street, Panorama City");
sbp.addRoom(110, "W.B. Jones Heating & Air")
sbp.addRoom(200, "Dunder Mifflin Paper")
sbp.addRoom(210, "Vance Refrigeration")
sbp.printDirectory()



