function isHexColor(userInput) {
    return /^#[0-9a-f]{6}$/i.test(userInput);
}

hexCode = {
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15, 
    toDecimal: function(n) {
        if(n in this){
            return this[n]
        } else {
            return parseInt(n)
        }
    }
}

console.log(hexCode.toDecimal('a'));
console.log(hexCode.toDecimal('1'));

function 

function hexToRGB(input) {
    
    if(isHexColor(input)){

        input = input.toLowerCase()
        
        let r = input.slice(1,3)
        let g = input.slice(3,5)
        let b = input.slice(5)

        
        return [r,g,b]
    }
    else {
        return 
    }
}

let hexColor = "#3020Ff"
let output = hexToRGB(hexColor)
console.log(output);

