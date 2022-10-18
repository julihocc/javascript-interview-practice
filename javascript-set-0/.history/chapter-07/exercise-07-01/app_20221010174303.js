function isHexColor(userInput) {
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(userInput);
}

function hexToRGB(input) {
    if(isHexColor(input)){
        input = input.slice(1)
    }
}

let hexColor = "#3020ff"

let output = isHexColor(hexColor)

