const testString = "abcXYZ09"

const [minDigits, maxDigits, minMinus, maxMayus] = ['0', '9','A','Z','a','z'].map( x => x.codePointAt(0))

console.log(minDigits);

