function isHexColor(userInput) {
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(userInput);
  }

let output = isPattern("#30")
console.log(output);