const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="
${twitterHashtag(word)}">#${word}</a>`

console.log(genAnchorTag('\\bhappiness'));

const longTextContainer = document.getElementById('longTextContainer')
const longText = longTextContainer.innerHTML
const word = 'stronger'
const re = new RegExp(`${word}`)
console.log('re:', re)
const a = genAnchorTag(word)
const newLongText = longText.replace(re, a);
longTextContainer.innerHTML = newLongText