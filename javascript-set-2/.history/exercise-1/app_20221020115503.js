const test = (r, s) => {
    const regexp = new RegExp(r);
    console.log(`${s} satisfies at least one match for ${r}: ${regexp.test(s)}`)
} 

// a.) .abc
test('.abc', 'zabc')

