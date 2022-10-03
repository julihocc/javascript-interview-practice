function CustomObject(a,b){
    this.a = a;
    this.b = b;
}

CustomObject.prototype.c =function() {return this.a = this.b};

const obj = new CustomObject(1,2);

const printObjProp = (obj, justOwnPropertird=false) => {
    Object.keys(obj).forEach((prop) => console.log(prop));
    if not(jus)
}

printObjProp(obj)