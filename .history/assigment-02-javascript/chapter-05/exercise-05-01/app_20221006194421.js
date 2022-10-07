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

baz = new Bank("Banco Az");

console.log(baz.name)
console.log(baz.getName())

baz.addClient()