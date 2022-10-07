function Bank(name) {
    name = name,
        clients = {},
        this.getName = function () {
            return name;
        },
        this.addClient = function (id, name, initialDeposit) {
            if(!(id in this.getAllClients())){
                if(initialDeposit>0){
            let newClient = new Client(id, name, this.getName(), initialDeposit);
            clients[newClient.getID()] = newClient
            } else {
                throw "ID Number already exists!!!"
            }
        },
        this.getAllClients = function () {
            return clients
        },
        this.getClientById = function (id) {
            return clients[id]
        }
}

function Client(id, name, bank, initialDeposit) {
    id,
        name,
        bank,
        balance = initialDeposit,
        this.getID = function () {
            return id
        },
        this.getName = function () {
            return name
        },
        this.getBank = function () {
            return bank
        },
        this.getBalance = function () {
            return balance
        }
}

const baz = new Bank("Banco Azteca");
console.log(baz.getName());

baz.addClient(001, "Michael Scott", 250000);
baz.addClient(002, "Dwight Schrute", 250000);

const michael = baz.getClientById(001)
console.log(michael.getName());
console.log(michael.getBank());
console.log(michael.getBalance());


const dwight = baz.getClientById(002)