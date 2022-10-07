function Bank(name) {
    name = name;
    this.clients = {};    
}

baz = new Bank("Banco Az");

console.log(baz.name)