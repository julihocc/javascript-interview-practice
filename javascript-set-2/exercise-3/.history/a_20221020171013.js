const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits+1
const lenMayus = maxMayus-minMayus+1
const lenMinus = maxMinus-minMinus+1

console.log(minDigits, maxDigits, lenDigits);
console.log(minMayus, maxMayus, lenMayus);
console.log(minMinus, maxMinus, lenMinus);

const shift = (char) => {
    let newAscii
    ascii = char.codePointAt(0)
    console.log(ascii)
    if (minDigits <= ascii <= maxDigits) {
        newAscii = minDigits + (ascii+1-minDigits)%(lenDigits)
    }
    if (minMayus <= ascii <= maxMayus) {
        newAscii = minMayus + (ascii+1-minMayus)%(lenMayus)
    }
    if (minDigits <= ascii <= maxDigits) {
        newAscii = minDigits + (ascii+1-minDigits)%(lenDigits)
    }
    console.log(newAscii)
    return String.fromCodePoint(newAscii)
}

console.log(shift('Z'))

