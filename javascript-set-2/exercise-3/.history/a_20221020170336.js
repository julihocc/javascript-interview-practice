const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits 
const lenMayus = maxMayus-minMayus 
const lenMinus = maxMinus-minMinus

console.log(minDigits);

const shift = (char) => {
    let newAscii
    ascii = char.codePointAt(0)
    if (minDigits <= ascii <= maxDigits) {
        newAscii = minDigits + (ascii-minDigits)%lenDigits
        console.log(ascii)
    }
    console.log(newAscii)
    return String.fromCodePoint(newAscii)
}

console.log(shift('1'))

