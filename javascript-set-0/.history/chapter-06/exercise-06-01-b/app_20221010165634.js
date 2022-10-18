class User {
    constructor(fname, lname, address) {
        this.firstName = fname;
        this.lastName = lname;   
    }
}

class Employee extends User {
    constructor(fname, lname, snn) {
        super(fname, lname, address);
        this.snn = snn;
        this.checkIns = []
        this.checkOuts = []
    }

    this.checkIn() {
        this.checkIns.push(Date.now());        
    }
}

let jim = new Employee("Jim", "Halper", )