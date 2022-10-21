const isPalindrome = (word) => {
    const len = word.length;        
    const halfWord = Math.floor(len/2);
    const isOdd = len%2;
    console.log(halfWord);
    console.log(isOdd);
    let pattern = "^"
    for (let i=1; i<=halfWord+isOdd; i++){
        pattern += "(.)"
    }
    for (let i=1; i<=halfWord; i++) {
        pattern += `\\${halfWord-i}`
    }
    console.log(pattern);
}

isPalindrome('abcdcba')