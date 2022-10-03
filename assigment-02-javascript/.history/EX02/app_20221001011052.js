const add = (...arr) => arr.reduce(
    (acc, current) => acc+current, 0
)

const answer = add(1,2) + add()

console.log(answer)