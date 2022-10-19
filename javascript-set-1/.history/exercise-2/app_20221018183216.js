const limitFunc = (fn, limit) => (function(){
    let counter = 0;
    if(counter < limit){
        return ()
    }
})

const limited = limitFunc(() => {
    console.log('hi')
}, 2)

limited()
limited()