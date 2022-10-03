const data = new Array(1600);
console.log(data);

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    
  }

  const personOne = new Person('testFirstNameOne', 'testLastNameOne');
  const personTwo = new Person('testFirstNameTwo', 'testLastNameTwo');

  console.log(personOne);
  console.log(personTwo);