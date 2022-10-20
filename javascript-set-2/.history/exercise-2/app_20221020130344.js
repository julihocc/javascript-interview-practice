const test = (r) => {
    const regexp = new RegExp(r);
    console.log(regexp)
    return (s) => console.log(`${s} satisfies /${r}/: ${regexp.test(s)}`)
} 

// A
const testA = test('[A-Z][a-z]+ \\d{2}, \d{4}')
testA('September 29, 1972')