import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// console.log(lorem.generateWords(1));
// console.log(lorem.generateSentences(5));
// console.log(lorem.generateParagraphs(7));

setTimeout( () => console)
