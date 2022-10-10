function isHexColor(userInput) {
    return /^#[0-9a-f]{6}$/i.test(userInput);
}

function hexToRGB(input) {
    
    if(isHexColor(input)){
        
        r = input.slice(1,2)

        let output = input
        return output
    }
}

let hexColor = "#3020ff"
let output = hexToRGB(hexColor)
console.log(output);

