class User {
    constructor(fname, lname, address) {
        this.firstName = fname;
        this.lastName = lname;
        this.address = address;        
    }
}

class Employee {
    constructor(fname, lname, address, snn) {
        super(fname, lname, address);
        this.snn = snn;
    }
    
}