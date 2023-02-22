const wordSearch = (letters, word) => {
  if (letters.length > 0) {

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }

    for (let i = 0; i < letters[0].length; i++) {
      let verticalWord = "";
      for (const item of letters) {
        verticalWord += item[i];
      }
      if (verticalWord.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;

//Pair programming with Shujie Ma