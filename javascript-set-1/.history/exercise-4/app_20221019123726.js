const objA = {
    0: 'a',
    1: 'b',
    2: 'c',
    3
}

console.log('objA:', objA)

for (const key in objA) {
    console.log('key:', key)
}

const copyProp = (target, source, someProperties = false) => {

    if !(someProperties) {
        someProperties = Object.getOwnPropertyNames(source)
    }

    for (const key in source) {
        if (source.hasOwnProperty(key) && key in someProperties){            
            target[key] = source[key]
        }
    }
}