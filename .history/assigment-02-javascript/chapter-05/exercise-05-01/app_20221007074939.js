function Bank(name) {
    name = name,
        clients = {},

        this.getName = function () {
            return name;
        }
    this.addClient = function (id, name, initialDeposit) {
        let newClient = new Client(id, name, this.name, initialDeposit);
        clients[newClient.getID()] = newClient
    }
    this.getAllClients = function () {
        return clients
    }
    this.getClientById = function(id) {
        return clients[id]
    }
}

function Client(id, name, bank, initialDeposit) {
    id,
    name,
    bank,
    balance = initialDeposit,
    this.getID = function() {
        return id
    }
    this.getName = function() {
        return name
    }
    this.getBalance = function() {
        return balance
    }
}

const baz = new Bank("Banco Azteca");

console.log(baz.name);
console.log(baz.getName());

baz.addClient(001, "Michael Scott", 250000);
baz.addClient(002, "Dwight Schrute", 250000);
console.log(baz.clients);
console.log(baz.getAllClients());

const michael = baz.getClientById(001) 
const dwight = baz.getClientById(002)
console.log(michaek.getName())
console.log(dwight.getBalance())