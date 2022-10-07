function Building(id, address) {

    this.id = id,
        this.address = address,
        this.floors = {},
        this.rooms = {},
        this.equipment = {},
        this.users = {},

        this.addRoom = function (suite, company = null) {
            let level = Math.floor(suite / 100);
            let newRoom = new Room(suite, company, level);
            if (!(level in this.floors)) {
                this.floors[level] = [];
            }
            this.floors[level].push(suite)
            this.rooms[suite] = newRoom
        }

    this.printDirectory = function () {
        for (let level in this.floors) {
            let thisFloor = this.floors[level];
            console.log(`---- Floor #${level}`)
            // console.log(thisFloor);
            for (let suite in thisFloor) {
                thisSuite = thisFloor[suite];
                thisCompany = this.rooms[thisSuite].company;
                console.log(thisSuite, thisCompany)
            }
        }
    }

    this.registerEquipment = function (id, model) {
        let newEquipment = new Equipment(this, id, model);
        this.equipment[id] = newEquipment;
    }

    this.registerUser = function (id, name, suite) {
        let newUser = new User(this, id, name, suite);
        this.users[id] = newUser;
    }

    this.assignEquipmentToUser = function (equipmentID, userID) {
        thisEquipment = this.equipment[equipmentID];
        thisUser = this.users[userID];
        thisEquipment.user = userID;
        thisEquipment.
    }
}

// building ends here

function Room(suite, company = null, floor = null) {
    this.suite = suite,
        this.company = company,
        this.floor = floor,
        this.users = []
        this.equipment = []
}

function User(building, id, name, suite) {
    this.building = building,
        this.id = id,
        this.name = name,
        this.suite = suite,
        this.hardware = []
}

function Equipment(building, id, model) {
    this.building = building,
        this.id = id,
        this.model = model,
        this.suite = null,
        this.users = null
}

sbp = new Building("Scranton Business Park", "13927 Saticoy Street, Panorama City");
sbp.addRoom(110, "W.B. Jones Heating & Air")
sbp.addRoom(200, "Dunder Mifflin Paper")
sbp.addRoom(210, "Vance Refrigeration")
sbp.printDirectory()

// sbp.registerUser("001", "Michael Scott", "200")
// console.log(sbp.registeredUsers)


