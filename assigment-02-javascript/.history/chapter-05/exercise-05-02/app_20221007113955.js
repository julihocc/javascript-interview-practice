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
    this.addRoom = function(floor, number) {
        if !(floor in floors){
            this.addFloor(floor)
        }

    }

}

function Floor(building, number) {
    building,
    number,
    rooms = {}
}

function Room(floor, number, company=) {
    floor, 
    number
}

scrantonBP = new Building("B001", "13927 Saticoy Street, Panorama City");

scrantonBP.addFloor(1);
scrantonBP.addFloor(2);
scrantonBP.addFloor(3);





