// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  for (let step = 1; step <= n; step++) {
    console.log(
      ' '.repeat(n - step) +
        '#'.repeat(step + (step - 1)) +
        ' '.repeat(n - step)
    );
  }
}

module.exports = pyramid;
