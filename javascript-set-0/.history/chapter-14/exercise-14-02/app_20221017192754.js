import { LoremIpsum } from "lorem-ipsum";

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

  const longText = lorem.generateParagraphs(7);
  console.log("🚀 ~ file: app.js ~ line 15 ~ longText", longText)  