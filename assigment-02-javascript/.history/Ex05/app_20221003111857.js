function CustomObject(a,b){
    this.a = a;
    this.b = b;
}

CustomObject.prototype.c =function() {return this.a = this.b};

const obj = new CustomObject(1,2);

const printObjProp = (obj, justOwnProperties=false,  output=[]) => {
    
    Object.keys(obj).forEach((prop) => {
        // console.log(prop);
        output.push(prop);
    })

    if (!justOwnProperties){
        obj2 = obj.__proto__;
        if(obj2){           
            printObjProp(obj2, false, output);
        }else {
            console.log(output);
    } 
    }

    
}

printObjProp(obj)