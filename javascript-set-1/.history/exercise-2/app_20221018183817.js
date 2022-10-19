const limitFunc = (fn, limit) => () => {

        counter++;
        if (counter)

}

const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited()
limited()