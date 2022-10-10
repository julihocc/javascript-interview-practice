class User {
    constructor(fname, lname, address) {
        this.firstName = fname;
        this.lastName = lname;
        this.address = address;        
    }
}

class Employee extends {
    constructor(fname, lname, address, snn) {
        super(fname, lname, address);
        this.snn = snn;
        this.checkIns = []
        this.checkOuts = []
    }

    this.checkIn() {
        this.checkIns.push(Date.now());        
    }
}