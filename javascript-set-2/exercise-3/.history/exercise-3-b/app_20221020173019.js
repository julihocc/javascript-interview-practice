const twitterHashtag = (word) => `https://twitter.com/search?q=%23${word}`

const genAnchorTag = (word) => `<a href ="https://twitter.com/search?q=%23${twitterHashtag(word)}">${word}</a>`

console.log(genAnchorTag());

