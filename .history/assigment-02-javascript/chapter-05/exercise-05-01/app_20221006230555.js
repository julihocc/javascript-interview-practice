function Bank(name) {
    name = name,
        clients = {},

        this.getName = function () {
            return name;
        }
    this.addClient = function (name, initialDeposit) {
        let newClient = new Client(name, this.name, initialDeposit);
        clients[newClient.getID()] = newClient
    }
    this.getClients = function () {
        return clients
    }
    this.retrieveClientInfo = function(id) {
        return clients[id]
    }
}

function Client(name, bank, initialDeposit) {
    name,
    id, 
    bank,
    balance = initialDeposit,
    this.getID = function() {
        return id
    }
}

baz = new Bank("Banco Azteca");

console.log(baz.name);
console.log(baz.getName());

baz.addClient("Juan Carmona", 250000);
console.log(baz.clients);
console.log(baz.getClients());

console.log(baz.retrieveClientInfo(48))