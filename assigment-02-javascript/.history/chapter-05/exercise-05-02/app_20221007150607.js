function Building(id, address) {

        this.id,
        this.address,
        this.floors = {},
        this.rooms = {},
        this.registeredEquipment = {},
        this.registeredUsers = {},

        this.addRoom = function (suite, company = null) {
            let level = Math.floor(suite / 100);
            let newRoom = new Room(suite, company, level);
            if (!(level in floors)) {
                floors[level] = [];
            }
            floors[level].push(suite)
            rooms[suite] = newRoom
        }

    this.printDirectory = function () {
        for (level in floors) {
            let thisFloor = floors[level];
            console.log(`---- Floor #${level}`)
            // console.log(thisFloor);
            for (let suite in thisFloor) {
                thisSuite = thisFloor[suite];
                thisCompany = rooms[thisSuite].company;
                console.log(thisSuite, thisCompany)
            }
        }
    }

    this.registerEquipment = function (id, model) {
        let newEquipment = new Equipment(this, id, model);
        registeredEquipment[id] = newEquipment;
    }

    this.registerUser = function (id, name, suite) {
        let newUser = new User(this, id, name, suite);
        registeredUsers[id] = newUser;
    }

    this.assignEquipmentToUser = function (equipmentID, userID) {
        thisEquipment = registeredEquipment[equipmentID];
        thisUser = registeredUsers[userID];

        if (!thisEquipment.suite) {
            thisEquipment.suite = thisUser.suite;
        }

        if (thisEquipment.suite === thisUser.suite) {
            thisEquipment.users.push(userID);
        }
        else {
            throw "User must be at the same room at where equipment is already assigned!!!"
        }
    }
}

// building ends here
function Room(suite, company = null, floor = null) {
    this.suite = suite,
        this.company = company,
        this.floor = floor,
        this.users = []
}

function User(building, id, name, suite) {
    this.building = building,
        this.id = id,
        this.name = name,
        this.suite = suite,
        this.hardware = []
}

function Equipment(building, id, model, suit = null) {
    this.building = building,
        this.id = id,
        this.model = model,
        this.suite = suite,
        this.users = []
}

sbp = new Building("Scranton Business Park", "13927 Saticoy Street, Panorama City");
sbp.addRoom(110, "W.B. Jones Heating & Air")
sbp.addRoom(200, "Dunder Mifflin Paper")
sbp.addRoom(210, "Vance Refrigeration")
sbp.printDirectory()

sbp.registerUser("001", "Michael Scott", "200")
console.log(sbp.registeredUsers)


