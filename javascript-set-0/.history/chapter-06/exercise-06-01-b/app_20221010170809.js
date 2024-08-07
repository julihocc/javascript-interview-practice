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
    }

    checkOut() {
        if (this.checkIns.length > this.checkOuts.length) {
            this.checkOuts.push(Date(Date.now()).toString());
        } else {
            throw "You have to check in first!"
        }
    }
}

class Manager extends Employee {
    constructor(fname, lname, snn, password) {
        super(fname, lname, snn);
        this.password;
    }

    grantAccess(passwd) {
        if(passwd===this.password){
            console.log()
        }
    }
}

let jim = new Employee("Jim", "Halper", "THFFC003");
jim.checkIn()
console.log(jim.checkIns);
jim.checkOut()
console.log(jim.checkOuts);
// jim.checkOut()

