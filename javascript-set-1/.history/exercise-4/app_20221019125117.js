const abc = {
    'p1': 'a',
    'p2': 'b',
    'p3': 'c'
}

const vowels = {
    'p1': 'a', 
    'p2': 'e',
    'p3': 'i',
    'p4': 'o', 
    'p5': 'u'
}

const xyz = {
    'p1': 'x',
    'p2': 'y',
    'p3': 'z'
}

const copyProp = (target, source, someProperties = false) => {

    console.log('someProperties:', someProperties)

    if (!someProperties) {
        someProperties = Object.getOwnPropertyNames(source)
    }

    console.log('someProperties:', someProperties)

    for (const key in source) {
        console.log('key:', key)
        if (source.hasOwnProperty(key)){
            if (key in someProperties){
                
            }   
            console.log('key:', key)
            target[key] = source[key]
        }
    }
}

// copyProp(vowels, xyz)
// console.log('vowels:', vowels)

copyProp(vowels, abc, ['p1', 'p3'])
console.log('vowels:', vowels)