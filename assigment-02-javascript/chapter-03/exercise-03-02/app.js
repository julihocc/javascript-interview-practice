const add = (...arr) => arr.reduce(
    (acc, current) => acc+current, 0
)

const answer = add(1,2) + add(1, 4, 6, 7, 2)

console.log(answer)