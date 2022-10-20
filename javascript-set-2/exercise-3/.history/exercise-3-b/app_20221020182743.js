const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="
${twitterHashtag(word)}">${word}</a>`

console.log(genAnchorTag('happiness'));

const body = document.getElementById('longText')
console.log(body);