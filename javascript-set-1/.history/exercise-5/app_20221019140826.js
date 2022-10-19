


const counting = (input) => {
    let counter = 0;
    if (typeof input === string) {
        for (const char of input) {
            if (vowels.includes(char)) {
                counter++
            }
        }
    }
}