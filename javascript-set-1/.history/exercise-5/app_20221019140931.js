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
    return counter
}

counting('abecedario')

