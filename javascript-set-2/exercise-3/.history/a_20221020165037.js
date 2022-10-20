const testString = "abcXYZ09"

const marks = ['a','z','A','Z','0', '9'].map( x => x.codePointAt(0))

console.log('marks:', marks)