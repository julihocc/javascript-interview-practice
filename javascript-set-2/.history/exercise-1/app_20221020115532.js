const test = (r, s) => {
    const regexp = new RegExp(r);
    console.log(`${s} satisfies at least one match for ${r}: ${regexp.test(s)}`)
} 

test('.abc', 'zabc')
test('a+b?!!')


