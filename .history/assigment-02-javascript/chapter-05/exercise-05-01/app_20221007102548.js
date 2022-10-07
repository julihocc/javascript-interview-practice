function Bank(name) {
    name = name,
        clients = {},
        this.getName = function () {
            return name;
        },
        this.addClient = function (id, name, initialDeposit) {
            if (!(id in this.getAllClients())) {
                if (initialDeposit > 0) {
                    let newClient = new Client(this, id, name, initialDeposit);
                    clients[id] = newClient
                } else {
                    throw "Please, deposit real money!!! "
                }
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

function Client(bank, id, name, balance) {
    bank, 
    id,
        name,
        balance,
        this.getID = function () {
            return id
        },
        this.getName = function () {
            return name
        },
        this.getBank = function () {
            return bank.getName()
        },
        this.getBalance = function () {
            return balance
        },
        this.retrieveInfo = function () {
            console.log(`----\n Client ID: ${id} \n Client Name: ${name} \n Bank: ${bank.getName()} \n Balance: ${balance}`)
        }
        this.retrieveMoney = function(amount) {
            if(amount <= balance){
                balance -= amount
            }
        }
        this.depositInOwnAccount = function (amount) {
            balance += amount
        }
        this.transferMoney = function (id, amount) {
            if(amount <= balance){

                console.log("****")

                console.log("****\n Propietary Info")
                this.retrieveInfo()

                let beneficiary = bank.getClientById(id)
                console.log("****\n Beneficiary info")
                beneficiary.retrieveInfo()



            }
        } 

}

const baz = new Bank("Banco Azteca");
console.log(baz.getName());

baz.addClient("001", "Michael Scott", 25);
const michael = baz.getClientById("001")
michael.retrieveInfo()

baz.addClient("002", "Dwight Schrute", 100);
const dwight = baz.getClientById("002")
michael.retrieveInfo()
dwight.retrieveInfo()

michael.retrieveMoney(20)
michael.retrieveInfo()

dwight.depositInOwnAccount(100)
dwight.retrieveInfo()

dwight.transferMoney("001", 65)



