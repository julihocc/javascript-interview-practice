const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="
${twitterHashtag(word)}">${word}</a>`

console.log(genAnchorTag('happiness'));

const longText = document.getElementById('longText')
// console.log(longText.innerHTML);
const word = 'happines'
const a = genAnchorTag()
console.log(longText.innerHTML.replace);