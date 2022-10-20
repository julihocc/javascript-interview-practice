const test = (r) => {
    const regexp = new RegExp(r);
    console.log(regexp)
    return (s) => console.log(`${s} satisfies /${r}/: ${regexp.test(s)}`)
} 

// A
const testA = test('[A-Z][a-z]+ \\d{2}, \\d{4}')
testA('September 29, 1972')
testA('February 99, 0001')
testA('June 04, 3000')

// B
const testB = test('((^\\d+[a-zA-z])')
testB('A52')
testB('d747')
testB('27X')
testB('v2')
testB('2wEt')
