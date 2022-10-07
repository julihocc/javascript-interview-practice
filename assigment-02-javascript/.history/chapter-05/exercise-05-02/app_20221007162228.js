function Building(id, address) {

    this.id = id,
        this.address = address,
        this.floors = {},
        this.rooms = {},
        this.equipment = {},
        this.users = {},
        this.prev

        this.addRoom = function (room, company = null) {
            let level = Math.floor(room / 100);
            let newRoom = new Room(room, company, level);
            if (!(level in this.floors)) {
                this.floors[level] = [];
            }
            this.floors[level].push(room)
            this.rooms[room] = newRoom
        }

    this.printDirectory = function () {
        for (let level in this.floors) {
            let thisFloor = this.floors[level];
            console.log(`---- Floor #${level}`)
            // console.log(thisFloor);
            for (let room in thisFloor) {
                thisroom = thisFloor[room];
                thisCompany = this.rooms[thisroom].company;
                console.log(thisroom, thisCompany)
            }
        }
    }

    this.registerEquipment = function (id, model) {
        let newEquipment = new Equipment(this, id, model);
        this.equipment[id] = newEquipment;
    }

    this.registerUser = function (id, name, room) {
        let newUser = new User(this, id, name, room);
        this.users[id] = newUser;
    }

    this.assignEquipmentToUser = function (equipmentID, userID) {
        thisEquipment = this.equipment[equipmentID];
        thisUser = this.users[userID];
        thisEquipment.user = userID;
        thisEquipment.room = thisUser.room;
        thisUser.hardware.push(equipmentID);
    }

    this.findEquipmentByID = function()
}

// building ends here

function Room(room, company = null, floor = null) {
    this.room = room,
        this.company = company,
        this.floor = floor,
        this.users = []
        this.equipment = []
}

function User(building, id, name, room) {
    this.building = building,
        this.id = id,
        this.name = name,
        this.room = room,
        this.hardware = [],
}

function Equipment(building, id, model) {
    this.building = building,
        this.id = id,
        this.model = model,
        this.room = null,
        this.users = null
}

sbp = new Building("Scranton Business Park", "13927 Saticoy Street, Panorama City");
sbp.addRoom(110, "W.B. Jones Heating & Air")
sbp.addRoom(200, "Dunder Mifflin Paper")
sbp.addRoom(210, "Vance Refrigeration")
sbp.printDirectory()

sbp.registerUser("Ux01", "Michael Scott", "200")
michael = sbp.users["Ux01"]
console.log(michael.name)


sbp.registerUser("Ux02", "Dwight Schrute", "200")
dwight = sbp.users["Ux02"]
console.log(dwight.name)

sbp.registerEquipment("Ex01", "Sabre printer")
printer = sbp.equipment["Ex01"]
console.log(printer.model)

sbp.assignEquipmentToUser("Ex01", "Ux02")
console.log(printer.user)
console.log(printer.room)
console.log(dwight.hardware)
