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
    if (minDigits <= ascii && ascii <= maxDigits) {
        console.log('digits');
        newAscii = minDigits + (ascii+1-minDigits)%(lenDigits)
    } else if (minMayus <= ascii && ascii <= maxMayus) {
        console.log('mayus');
        newAscii = minMayus + (ascii+1-minMayus)%(lenMayus)
    }
    if (minMinus <= ascii && ascii <= maxMinus) {
        console.log('minus')
        newAscii = minMinus + (ascii+1-minMinus)%(lenMinus)
    }
    console.log(newAscii)
    return String.fromCodePoint(newAscii)
}

console.log(shift('z'))



