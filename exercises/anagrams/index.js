// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return formater(stringA) === formater(stringB);
}

const formater = (string) => {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

// function anagrams(stringA, stringB) {
//   const { obj: a, size: aSize } = letCounter(stringA);
//   const { obj: b, size: bSize } = letCounter(stringB);

//   // if (Object.keys(a).length !== Object.keys(b).length) return false;
//   if (aSize !== bSize) return false;

//   for (let key in a) {
//     if (a[key] !== b[key]) return false;
//   }

//   return true;
// }

// const letCounter = (raw) => {
//   const formated = raw.replace(/[^\w]/g, '').toLowerCase();
//   const obj = {};

//   for (const el of formated) {
//     obj[el] ? (obj[el] += 1) : (obj[el] = 1);
//   }

//   return { obj, size: formated.length };
// };

module.exports = anagrams;
