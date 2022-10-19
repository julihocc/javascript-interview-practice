const limitFunction = (fn, limit) => (function (fn , limit) {
    let counter = 0;

    return () => {
        if(counter < limit){
            fn()
        }
        counter++;
        console.log();
    }

})(fn, limit)


const limited = limitFunction(() => console.log('hi'), 2)

limited()
limited()
limited()


