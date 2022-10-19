const limitFunc = (fn, limit) => {
    return (function (fn, limit) {
        let counter = 0;
        if (counter < limit) {
            fn()
            counter++;
        }
    })(fn, limit)
}

const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited
limited