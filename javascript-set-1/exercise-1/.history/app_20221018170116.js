const words = ['Anita', 'anita', 'Beto', 'carro', 'carros', 'dado']

words.sort()

console.log('words:', words)

const ascLexOrder = (a,b) => {
    if (a<b) {
        return -1
    } else if (a>b) {
        return 1
    } else {
        return 0
    }
}

// const ascLexOrder = (a,b) => {
//     if (a>b) {
//         return -1
//     } else if (a<b) {
//         return 1
//     } else {
//         return 0
//     }
// }

// const descLenOrder = (a,b) => {
//     return b.length - a.length
// }

// const ascLenOrder = (a,b) => {
//     return b.length - a.length
// }

words.sort(ascLexOrder)
// words.sort(descLexOrder)

console.log('words:', words)