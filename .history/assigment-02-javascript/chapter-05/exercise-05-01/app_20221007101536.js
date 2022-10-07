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

function Client(bank, id, name, balance_) {
    bank, 
    id,
        name,
        let balance = balance,
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
            console.log(`Client ID: ${id} \n Client Name: ${name} \n Bank: ${bank.getName()} \n Balance: ${balance}`)
        }
        this.depositInOwnAccount = function (amount) {
            console.log("in this deposit", this);
            balance += amount
        }
        this.transferMoney = function (id, amount) {
            if(amount <= balance){
                console.log(name, balance);
                balance -= amount;
                console.log(name, balance);
                let beneficiary = bank.getClientById(id)
                // console.log(beneficiary.getName(), beneficiary.getBalance());
                // this.depositInOwnAccount.call(beneficiary,amount)
                // console.log(beneficiary.getName(), beneficiary.getBalance());
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




