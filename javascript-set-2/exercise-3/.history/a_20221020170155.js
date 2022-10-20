const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits 
const lenMayus = maxMayus-minMayus 
const lenMinus = maxMinus-minMinus

const shift = (char) => {
    ascii = char.codePointAt(0)
    if (minDigits <= ascii <= maxDigits) {
        let newAscii = minDigits + (ascii+1-minDigits)%lenDigits
        console.log(ascii)
    }
    console.log(newAscii)
    return String.fromCodePoint(newAscii)
}

shift('9')

