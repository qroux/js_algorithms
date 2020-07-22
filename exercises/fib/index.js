// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;
  if (n >= 2) {
    return fib(n - 2) + fib(n - 1);
  }
}

const fib = memoize(slowFib);

// const memo = {};

// function fib(n) {
//   // ITERATIVE

//   // let arr = [];
//   // for (let i = 0; i <= n; i++) {
//   //   if (i === 0) arr.push(0);
//   //   if (i === 1) arr.push(1);
//   //   if (i > 1) arr.push(arr[i - 2] + arr[i - 1]);
//   // }

//   // return arr[arr.length - 1];

//   // RECURSIVE
//   // if (n < 2) return n;
//   // if (n >= 2) {
//   //   return fib(n - 2) + fib(n - 1);
//   // }

//   // GLOBAL VARIABLE MMOIZED version
//   // if (n < 2) return n;
//   // if (n >= 2) {
//   //   if (memo[n]) {
//   //     return memo[n];
//   //   } else if (memo[n - 2] && memo[n - 1]) {
//   //     return (memo[n] = memo[n - 2] + memo[n - 1]);
//   //   } else {
//   //     return (memo[n] = fib(n - 2) + fib(n - 1));
//   //   }
//   // }

//   // REAL MEMOIZED
// }

module.exports = fib;
