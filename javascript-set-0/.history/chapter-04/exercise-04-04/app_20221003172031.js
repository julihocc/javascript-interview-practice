const dataType(...arr) {
    arr.forEach( item => console.log(typeof item) )
}

dataType(1, 6.2, "pi*2", [function(){}, {}, function(){})