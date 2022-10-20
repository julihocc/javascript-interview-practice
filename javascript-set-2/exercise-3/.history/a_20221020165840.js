const testString = "abcXYZ09"

const [minDigits, maxDigits, minMayus, maxMayus, minMinus, maxMinus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

const lenDigits = maxDigits-minDigits 
const lenMayus = maxMayus-minMayus 
const lenMinus = maxMinus-minMinus

const shift = (char) => {
    ascii = char.codePointAt(0)
    if (minDigits <= ascii <= maxDigits) {
        console.log(ascii)
    }
}



