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
    this.getClients = function () {
        return clients
    }
    this.retrieveClientInfo = function(id) {
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
}

baz = new Bank("Banco Azteca");

console.log(baz.name);
console.log(baz.getName());

baz.addClient(001, "Juan Carmona", 250000);
console.log(baz.clients);
console.log(baz.getClients());

console.log(baz.retrieveClientInfo(001).getName())