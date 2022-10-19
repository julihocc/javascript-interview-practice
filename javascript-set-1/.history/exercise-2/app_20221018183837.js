const limitFunc = (fn, limit) => () => {

        counter++;
        if (counter < limit) {
            return fn
        }

}

const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited()
limited()