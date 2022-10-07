function Bank(name) {
    name = name;
    clients = {};
    this.getName = function(){
        return name;
    }    
}

baz = new Bank("Banco Az");

console.log
console.log(baz.getName())