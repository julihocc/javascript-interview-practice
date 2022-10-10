function isHexColor(userInput) {
    return /^#[0-9a-f]{6}$/i.test(userInput);
}

function hexToRGB(input) {
    
    if(isHexColor(input)){
        
        let r = input.slice(1,3)
        let g = input.slice(2,4)
        let b = input.slice(3,5)

        let output = b
        return output
    }
}

let hexColor = "#3020ff"
let output = hexToRGB(hexColor)
console.log(output);

