function Bank(name) {
    name = name,
        clients = {},
        this.getName = function () {
            return name;
        },
        this.addClient = function (id, name, initialDeposit) {
            if (!(id in this.getAllClients())) {
                if (initialDeposit > 0) {
                    let newClient = new Client(id, name, this, initialDeposit);
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
            return bank.getName()
        },
        this.getBalance = function () {
            return balance
        },
        this.retrieveInfo = function () {
            console.log(`Client ID: ${id} \n Client Name: ${name} \n Bank: ${bank.getName()} \n Balance: ${balance}`)
        }
        this.depositInOwnAccount = function (amount) {
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
baz.addClient("002", "Dwight Schrute", 25);

const michael = baz.getClientById("001")
michael.retrieveInfo()

const dwight = baz.getClientById("002")
dwight.retrieveInfo()


michael.depositInOwnAccount(10);
console.log(michael.getBalance());
michael.transferMoney("002", 15)
console.log(michael.getBalance());
console.log(dwight.getBalance());

