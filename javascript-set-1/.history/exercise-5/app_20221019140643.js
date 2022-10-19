


const counting = (input) => {

    if (typeof input === 'string') {
        for (const char of input) {
            if (vowels.includes(char)) {
                console.log('char:', char)
            }
        }
    }
}