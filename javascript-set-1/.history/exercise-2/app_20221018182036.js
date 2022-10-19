const limitFunc = (function(fn , limit) {
    let counter = 0;
    while (counter < limit) {
        fn()
        counter++;
    }
})