// matrices

// load math.js (using node.js)
const math = require('mathjs')
var assert = require('assert');

const a = math.complex(2, 3)     // Complex 2 + 3i
console.log('a.re:', a.re)                             // Number 2
console.log('a.im:', a.im)                             // Number 3

const b = math.complex('4 - 2i') // Complex 4 - 2i
// assert(b.re == 5)                         // Number 5
console.log('b:', b)

// create matrices and arrays. a matrix is just a wrapper around an Array,
// providing some handy utilities.
console.log('create a matrix')
const M = math.matrix([1, 4, 9, 16, 25])
console.log(M)
const N = math.matrix(math.ones(4))
console.log(N)
