(function () {
    const counter = 0;
})(fn, limit)



const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited()
limited()