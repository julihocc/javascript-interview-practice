const objA = {
    name: 'Jim Halper'
}

console.log('objA:', objA)

for (const key in objA) {
    console.log('key:', key)
}

const copyProp = (target, source, someProperties = false) => {

    if !(someProperties) {
        someProperties = Object()
    }

    for (const key in source) {
        if (source)
    }
}