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
        if(this.checkIns.length > this.checkOuts.length){
            this.check
        }
    }
}

let jim = new Employee("Jim", "Halper", "THFFC003");
jim.checkIn()
console.log(jim.checkIns);