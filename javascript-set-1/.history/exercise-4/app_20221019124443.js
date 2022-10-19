const abc = {
    0: 'a',
    1: 'b',
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

    for (const key in source) {
        if (source.hasOwnProperty(key) && key in someProperties){    
            console.log(key)        
            target[key] = source[key]
        }
    }
}

// copyProp(vowels, xyz)
// console.log('vowels:', vowels)

copyProp(vowels, abc, [0,2])
console.log('vowels:', vowels)