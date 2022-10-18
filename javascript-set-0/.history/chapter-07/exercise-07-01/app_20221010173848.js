function isHexColor(userInput) {
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(userInput);
  }

let output = isPattern("951-408-1968")
console.log(output);