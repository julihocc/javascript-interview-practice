const isPalindrome = (word) => {
    const len = word.length;        
    const halfWord = Math.floor(len/2);
    const isOdd = len%2;
    console.log(halfWord);
    console.log(isOdd);
    const hi = 3*'f'
    console.log(hi);    
}

isPalindrome('abcdcba')