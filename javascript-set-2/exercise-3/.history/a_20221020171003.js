const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits+1
const lenMayus = maxMayus-minMayus+1
const lenMinus = maxMinus-minMinus

console.log(minDigits, maxDigits, lenDigits);
console.log(minMayus, maxMayus, lenMayus);
console.log(minMinus, maxMinus, lenMinus);

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

