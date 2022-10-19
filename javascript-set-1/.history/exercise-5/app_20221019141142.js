const counting = (input) => {
    
    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    let counter = 0;
    
    if (typeof input === 'string') {
        for (const char of input) {
            if (vowels.includes(char)) {
                counter++;
            }
        }
    }

    if (typeof input === 'number') {
        return Math.floor(Math.log(input)/Math.log(10)) + 1
    }

    return counter
}

counting('abecedario')
counting(1232)

