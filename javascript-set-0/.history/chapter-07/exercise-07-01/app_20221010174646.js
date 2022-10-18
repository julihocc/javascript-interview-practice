function isHexColor(userInput) {
    return /^#[0-9a-f]{6}$/i.test(userInput);
}

function hexToRGB(input) {
    
    if(isHexColor(input)){
        
        let r = input.slice(1,3)
        g = input.slice(2,4)

        let output = g
        return output
    }
}

let hexColor = "#3020ff"
let output = hexToRGB(hexColor)
console.log(output);

