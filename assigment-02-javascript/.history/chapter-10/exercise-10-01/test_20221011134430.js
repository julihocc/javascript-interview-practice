const math = require('mathjs')
var assert = require('assert');

const a = math.complex(2, 3)     // Complex 2 + 3i
console.log('a.re:', a.re)                             // Number 2
console.log('a.im:', a.im)                             // Number 3

const b = math.complex('4 - 2i') // Complex 4 - 2i
// assert(b.re == 5)                         // Number 5
console.log('b:', b)
console.log('b.re:', b.re)