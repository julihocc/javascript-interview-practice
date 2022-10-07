function Bank(name) {
    name = name;
    clients = {};

    this.getName = function(){
        return name;
    }
    this.addClient = function(name, balance){
        clients[name] = balance;
    }    
    this.getClients = function(){
        return clients
    }
}

function Client(name, initialDeposit=0) {
    name = name, 
    balance = initialDeposit,

}

baz = new Bank("Banco Azteca");

console.log(baz.name);
console.log(baz.getName());

baz.addClient("Juan Carmona", 250000);
console.log(baz.clients);
console.log(baz.getClients());