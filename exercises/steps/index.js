// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   const initial = ' '.repeat(n);

//   for (let step = 1; step <= n; step++) {
//     console.log(initial.replace(initial.substring(0, step), '#'.repeat(step)));
//   }
// }

function steps(n) {
  for (let step = 1; step <= n; step++) {
    console.log('#'.repeat(step) + ' '.repeat(n - step));
  }
}

module.exports = steps;
