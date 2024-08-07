class User {
    constructor(fname, lname, address) {
        this.firstName = fname;
        this.lastName = lname;
    }
}

class Employee extends User {
    constructor(fname, lname, snn) {
        super(fname, lname);
        this.snn = snn;
        this.checkIns = [];
        this.checkOuts = [];
    }

    checkIn() {
        this.checkIns.push(Date(Date.now()).toString());
        return "Happy day!!!"
    }

    checkOut() {
        if (this.checkIns.length > this.checkOuts.length) {
            this.checkOuts.push(Date(Date.now()).toString());
            return "See you tomorrow!!!"
        } else {
            return "You have to check in at first!"
        }
    }
}

class Manager extends Employee {
    constructor(fname, lname, snn, password) {
        super(fname, lname, snn);
        this.password = password;
    }

    grantAccess(passwd) {
        if(passwd===this.password){
            return "Access granted!!!"
        } else {
            return "Access denied!!!"
        }
    }
}

let jim = new Employee("Jim", "Halper", "THFFC003");
console.log(jim.checkIn());
console.log(jim.checkIns);
console.log(jim.checkOut());
console.log(jim.checkOuts);
console.log(jim.checkOut());

let michael = new Manager("Michael", "Scoot", "THFFC001", "QWERTY1234");
console.log(michael.grantAccess("QWERTY1234"));
console.log(michael.grantAccess("QWERTY12345"));