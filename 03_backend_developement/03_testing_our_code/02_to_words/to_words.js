function toWords(sentence) {
  if (sentence!=="") {
    const allWords = sentence.split(/[.?!,'[\]; :]+/);
    return allWords.filter(word => word !== "");
  }
  else {
    const allWords = [];
    return allWords;
  }
}

module.exports = {
  toWords: toWords
};
