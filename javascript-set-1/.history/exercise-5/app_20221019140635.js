


const counting = (input) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    if (typeof input === 'string') {
        for (const char of input) {
            if (vowels.includes(char)) {
                console.log('char:', char)
            }
        }
    }
}