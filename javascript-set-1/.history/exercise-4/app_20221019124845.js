const abc = {
    'p1': 'a',
    'p2': 'b',
    2: 'c'
}

const vowels = {
    0: 'a', 
    1: 'e',
    2: 'i',
    3: 'o', 
    4: 'u'
}

const xyz = {
    0: 'x',
    1: 'y',
    2: 'z'
}

const copyProp = (target, source, someProperties = false) => {

    console.log('someProperties:', someProperties)

    if (!someProperties) {
        someProperties = Object.getOwnPropertyNames(source)
    }

    console.log('someProperties:', someProperties)

    for (const key in source) {
        if (source.hasOwnProperty(key) && (source[key] in someProperties)){   
            console.log('key:', key)
            target[key] = source[key]
        }
    }
}

// copyProp(vowels, xyz)
// console.log('vowels:', vowels)

copyProp(vowels, abc, [0,2])
console.log('vowels:', vowels)