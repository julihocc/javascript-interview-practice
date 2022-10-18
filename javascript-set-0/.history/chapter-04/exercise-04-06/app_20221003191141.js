const x = [1,2];

const numericValidArray = (..arr) => {
    arr.reduce(
        (acc, current) => acc & Number.isFinite
    )
}