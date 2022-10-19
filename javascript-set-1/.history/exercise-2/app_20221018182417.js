const limitFunc = (fn, limit) => {(function(fn , limit) {
    let counter = 0;
    while (counter < limit) {
        fn()
        counter++;
    }
})

const limited = limitFunc( ()=> {
    console.log('hi')
}, 2)

limited() 