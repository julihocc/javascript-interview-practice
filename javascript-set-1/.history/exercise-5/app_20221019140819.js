


const counting = (input) => {
    let counter = 0;
    if (typeof input === string) {
        const vowels = ['a', 'e', 'i', 'o', 'u']; 
        for (const char of input) {
            if (vowels.includes(char)) {
                counter++
            }
        }
    }
}