function Bank(name) {
    name = name;
    clients = {};
    this.getName = function(){
        return name;
    }
    this.addClient = function()    
}

baz = new Bank("Banco Az");

console.log(baz.name)
console.log(baz.getName())