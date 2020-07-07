// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const chunks = str.split(' ');
  const result = [];

  for (const chunk of chunks) {
    result.push(chunk.replace(chunk[0], chunk[0].toUpperCase()));
  }
  return result.join(' ');
}

module.exports = capitalize;
