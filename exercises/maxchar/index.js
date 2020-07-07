// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};

  for (let el of str) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  }

  // let max = Math.max(...Object.values(obj));

  // for (let key in obj) {
  //   if (obj[key] === max) {
  //     return key;
  //   }
  // }

  let maxVal = 0;
  let maxChar = '';

  for (let key in obj) {
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
