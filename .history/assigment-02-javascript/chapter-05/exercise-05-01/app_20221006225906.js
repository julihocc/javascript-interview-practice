function Bank(name) {
    name = name,
        clients = {},

        this.getName = function () {
            return name;
        }
    this.addClient = function (name, initialDeposit) {
        clients[name] = balance;
    }
    this.getClients = function () {
        return clients
    }
}

function Client(name, bank, initialDeposit = 0) {
    name = name,
    balance = initialDeposit,
    id = Math.floor(Math.random() * 1000), 
    bank = bank,
    

}

baz = new Bank("Banco Azteca");

console.log(baz.name);
console.log(baz.getName());

baz.addClient("Juan Carmona", 250000);
console.log(baz.clients);
console.log(baz.getClients());