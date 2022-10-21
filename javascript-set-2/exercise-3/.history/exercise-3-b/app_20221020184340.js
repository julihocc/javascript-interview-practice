const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="
${twitterHashtag(word)}">#${word}</a>`

console.log(genAnchorTag('happiness'));

const longTextContainer = document.getElementById('longTextContainer')
const longText = longTextContainer.innerHTML
const word = 'happiness'
const re = new RegExp(`\\s${word}\\s`)
console.log('re:', re)
const a = genAnchorTag(word)
const newLongText = longText.replace(re, " "+a+" ");
longTextContainer.innerHTML = newLongText