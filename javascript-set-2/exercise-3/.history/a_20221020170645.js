const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits 
const lenMayus = maxMayus-minMayus 
const lenMinus = maxMinus-minMinus

console.log(minDigits, maxDigits, lenDigits);
console.log(minMayus, maxDigits, lenDigits);
console.log(minDigits, maxDigits, lenDigits);

const shift = (char) => {
    let newAscii
    ascii = char.codePointAt(0)
    console.log(ascii)
    if (minDigits <= ascii <= maxDigits) {
        newAscii = minDigits + (ascii+1-minDigits)%(lenDigits+1)
    }
    if (minMayus <= ascii <= maxMayus) {
        newAscii = minMayus + (ascii+1-minMayus)%(lenMayus+1)
    }
    if (minDigits <= ascii <= maxDigits) {
        newAscii = minDigits + (ascii+1-minDigits)%(lenDigits+1)
    }
    console.log(newAscii)
    return String.fromCodePoint(newAscii)
}

console.log(shift('Z'))

