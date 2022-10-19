const limitFunction = (fn, limit) => (function (fn , limit) {
    let counter = 0;

    return () => {
        if(counter < limit){
            fn()
        }
        counter++;
        // console.log(counter);
    }

})(fn, limit)


const limited = limitFunction(() => console.log('hi'), 3)

limited()
limited()
limited()
limited()
limited()
limited()


