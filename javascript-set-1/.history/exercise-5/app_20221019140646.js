


const counting = (input) => {

    if (typeof input === 'string') {
        
    const vowels = ['a', 'e', 'i', 'o', 'u']
        for (const char of input) {
            if (vowels.includes(char)) {
                console.log('char:', char)
            }
        }
    }
}