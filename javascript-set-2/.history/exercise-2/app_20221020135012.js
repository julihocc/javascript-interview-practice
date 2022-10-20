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
testB("2w55")
testB("2wEt")
testB("w")

// C
const testC = test("[a-zA-Z]+\\.(txt|java|cpp)")
testC("test.java")
testC("program.cpp")
testC("newReport.txt")

//D
const testD = test("^(.)(.)(.)\\2\\1$")
testD("abcba")
testD("12321")
testD("_1a1_")

// console.log(/(.)(.)(.)\2\1/.test("abcba"));