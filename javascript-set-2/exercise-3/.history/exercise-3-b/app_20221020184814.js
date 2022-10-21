const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="
${twitterHashtag(word)}">#${word}</a>`


const longTextContainer = document.getElementById('longTextContainer')
const longText = longTextContainer.innerHTML
const word = 'happiness'
https://stackoverflow.com/questions/5752829/regular-expression-for-exact-match-of-a-string
const re = new RegExp(`\\b${word}\\b`)
console.log('re:', re)
const a = genAnchorTag(word)
const newLongText = longText.replace(re, a);
longTextContainer.innerHTML = newLongText