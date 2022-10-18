const words = ['Anne', 'apple', 'Zoe', 'zebra']

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

const descLexOrder = (a,b) => {
    if (a>b) {
        return -1
    } else if (a<b) {
        return 1
    } else {
        return 0
    }
}

const ascLenOrder = (a,b) => {
    return a.length - b.length
}

const descLenOrder = (a,b) => {
    return b.length - a.length
}

const countConstants = (a) => {
    for (c of a) {
        if(c.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
            
        }
    }
}

countConstants('hello')

// words.sort(ascLexOrder)
// words.sort(descLexOrder)
// words.sort(ascLenOrder)
words.sort(descLenOrder)
console.log('words:', words)