const test = (r) => {
    const regexp = new RegExp(r);
    console.log(regexp)
    return (s) => {
        const validation = regexp.test(s)
        console.log(`${s} satisfies /${r}/: ${validation}`)
        return validation 
    }
} 

// A
const testA = test("[A-Z][a-z]+ \\d{2}, \\d{4}")
console.log('testA("September 29, 1972"):', testA("September 29, 1972"))
console.log('testA("February 99, 0001"):', testA("February 99, 0001"))
console.log('testA("June 04, 3000"):', testA("June 04, 3000"))

// B
// const testB = test("((^\\d+[a-zA-z]$)|(^\\d+[a-zA-Z]\\d+$)|(^[a-zA-Z]\\d+$))")
const testB = test("((^\\d*[a-zA-Z]\\d+$)|(^\\d+[a-zA-Z]\\d*$))")
console.log('testB("A52"):', testB("A52"))
console.log('testB("d747"):', testB("d747"))
console.log('testB("27X"):', testB("27X"))
console.log('testB("v2"):', testB("v2"))
console.log('testB("2w55"):', testB("2w55"))
console.log('testB("2wEt"):', testB("2wEt"))
console.log('testB("w"):', testB("w"))

// C
const testC = test("[a-zA-Z]+\\.(txt|java|cpp)")
console.log('testC("test.java"):', testC("test.java"))
console.log('testC("program.cpp"):', testC("program.cpp"))
console.log('testC("newReport.txt"):', testC("newReport.txt"))

//D
const testD = test("^(.)(.)(.)\\2\\1$")
console.log('testD("abcba"):', testD("abcba"))
console.log('testD("12321"):', testD("12321"))
console.log('testD("_1a1_"):', testD("_1a1_"))

// E
const testPhrase = (re) => (phrase) => {
    const regexp = new RegExp(re)
    const words = phrase.trim().split(/\s+/);
    const result = words.filter( word => regexp.test(word))
    return result
}

const testE = testPhrase("^[b-yB-Y]+$")("Bee zapp Crow Eagle Zorro mouse Ape you")
console.log(testE)

// F
const nonNested = (re) => 
const testF = testPhrase('<([a-z])>')("Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.")
console.log(testF);