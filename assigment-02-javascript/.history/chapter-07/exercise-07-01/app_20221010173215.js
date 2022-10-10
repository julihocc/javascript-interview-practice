function isPattern(userInput) {
    return /^\d{3}-\d{3}-\d{4}$/.test(userInput);
  }

let output = isPattern("951-408-1968")
console.log();