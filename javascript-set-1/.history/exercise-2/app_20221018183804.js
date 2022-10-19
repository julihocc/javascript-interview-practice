const limitFunc = (fn, limit) => () => {


}

const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited()
limited()