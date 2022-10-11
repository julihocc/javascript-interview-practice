const math = require('mathjs')
const a = math.complex(2, 3)     // Complex 2 + 3i
a.re                             // Number 2
a.im                             // Number 3

const b = math.complex('4 - 2i') // Complex 4 - 2i
b.re = 5                         // Number 5
b   