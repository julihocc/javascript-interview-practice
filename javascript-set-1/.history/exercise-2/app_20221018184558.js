const f1 = (fn, limit) => (function (fn , limit) {
    const counter = 0;

    function f0(){
        fn();
    }

    return f0

})(fn, limit)


f1(console.log, 2)()


