const counting = (input) => {
    
    if (typeof input === 'string') {
    
        const vowels = ['a', 'e', 'i', 'o', 'u']; 
        let counter = 0;
        for (const char of input) {
            if (vowels.includes(char)) {
                counter++;
            }
        }
    }

    if (typeof input === 'number') {
        return Math.floor(Math.log(input)/Math.log(10)) + 1
    }

    
}

counting('abecedario')
console.log("🚀 ~ file: app.js ~ line 22 ~ counting('abecedario')", counting('abecedario'))

counting(12345)
console.log("🚀 ~ file: app.js ~ line 25 ~ counting(12345)", counting(12345))
