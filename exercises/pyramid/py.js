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
  const line = '#'.repeat(n + (n - 1));
  // const line = '-'.repeat(7);
  // const line = '0123456';

  // console.log(line, line.replace(line.substring(1, 2), 'X'));

  for (let step = 1; step <= n; step++) {
    console.log(
      line,
      line.replace(line.substring((line.length - 1) / 2), '123')
    );
  }
}

pyramid(10);
