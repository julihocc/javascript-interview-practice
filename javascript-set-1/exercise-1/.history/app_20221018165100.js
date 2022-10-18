const words = ['Anita', 'anita', 'Beto', 'carro', 'carros', 'dado ']

words.sort()

console.log('words:', words)

const ascLexOrder = (a,b) => {
    if (a>b) {
        return -1
    } else if (a<b) {
        return 1
    } else {
        return 0
    }
}

const descLexOrder = (a,b) => {
    if (a<b) {
        return -1
    } else if (a>b) {
        return 1
    } else {
        return 0
    }
}

words.sort(ascLexOrder)


console.log('words:', words)