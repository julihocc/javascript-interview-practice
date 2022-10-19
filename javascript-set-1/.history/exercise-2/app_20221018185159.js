const limitFunction = (fn, limit) => (function (fn , limit) {
    let counter = 0;

    return () => {
        if(counter )
        counter++;
    }

})(fn, limit)


const limited = limitFunction(console.log, 2)

limited()
limited()
limited()


