const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits 
const lenMayus = maxMayus-minMayus 
const lenMinus = maxMinus-minMinus

console.log(minDigits, maxDigits, lenDigits);

const shift = (char) => {
    let newAscii
        console.log(ascii)
    if (minDigits <= ascii <= maxDigits) {
        newAscii = minDigits + (ascii+1-minDigits)%(lenDigits+1)
    }
    console.log(newAscii)
    return String.fromCodePoint(newAscii)
}

console.log(shift('9'))

