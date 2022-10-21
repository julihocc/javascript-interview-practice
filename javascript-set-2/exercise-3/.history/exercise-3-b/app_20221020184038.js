const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="
${twitterHashtag(word)}">#${word}</a>`

console.log(genAnchorTag('happiness'));

const longTextContainer = document.getElementById('longTextContainer')
const longText = longTextContainer.innerHTML
const word = 'sport'
const re = new RegExp(`${word}`)
const a = genAnchorTag(re)
const newLongText = longText.replace(word, a);
longTextContainer.innerHTML = newLongText