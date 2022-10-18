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

const descLenOrder = (a,b) => {
    a
    return a.length - b.length
}

words.sort(ascLexOrder)
words.sort(descLexOrder)
words.sort(descLenOrder)

console.log('words:', words)