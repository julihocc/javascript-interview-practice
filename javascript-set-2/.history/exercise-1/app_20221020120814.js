const test = (r) => {
    const regexp = new RegExp(r);
    console.log(regexp)
    return (s) => console.log(`${s} satisfies /${r}/: ${regexp.test(s)}`)
} 

// a.)
test('.abc')('zabc')
// b.)
test('a+b?!!1{4}')('a!!1111')
// c.)
test('.{3}a\\.b')('123a.b')
// d.)
test("\\w")('a')
// e.)
test('\\s')(' ')
// f.) 
test('\\d')('1')
// g.)
test('.')('@')
// h.)
test('[abc]')('a')
// i.)
test('(abc)')('abc')
// j.)
test('[a-zA-Z_\\$\.]+[A-Za-z_\\$0-9\\.]*@[a-zA-Z_\\$\\.]+[a-zA-Z_\\$0-9\\.]*\\.(com|net|org){1}')

