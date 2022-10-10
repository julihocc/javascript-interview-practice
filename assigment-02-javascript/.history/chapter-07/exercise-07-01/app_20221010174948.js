function isHexColor(userInput) {
    return /^#[0-9a-f]{6}$/i.test(userInput);
}

hexCode = {
    "a": 10
}

function hexToRGB(input) {
    
    if(isHexColor(input)){
        
        let r = input.slice(1,3)
        let g = input.slice(3,5)
        let b = input.slice(5)

        
        return [r,g,b]
    }
}

let hexColor = "#3020Ff"
let output = hexToRGB(hexColor)
console.log(output);

