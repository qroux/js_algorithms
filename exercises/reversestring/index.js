// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('')
    .reduce((accumulator, current) => current + accumulator, '');

  // let result = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   result = str[i] + result;
  // }

  // return result;

  // return str.split('').reverse().join('');
}

module.exports = reverse;
