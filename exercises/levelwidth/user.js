function validSolution(board) {
  // horizontal check
  for (let row of board) {
    if (!rowCheck(row)) return false;
  }

  // vertical check
  const columns = [];

  for (let num of board[0]) {
    const temp = [];
    for (let i = 0; i < 9; i++) {
      temp.push(board[i][0]);
    }
    columns.push(temp);
  }

  for (let row of columns) {
    if (!rowCheck(row)) return false;
  }

  //square check
  const squares = [];

  let startingRow = 0;
  let startingCol = 0;
  let count = 0;

  while (count < 9) {
    const square = [];

    for (
      let row = startingRow, col = startingCol;
      row < startingRow + 3;
      row++
    ) {
      square.push(board[row][col], board[row][col + 1], board[row][col + 2]);
    }

    squares.push(square);

    if (startingCol < 6) {
      startingCol += 3;
    } else if (startingCol >= 6 && startingRow < 6) {
      startingRow += 3;
      startingCol = 0;
    }

    count++;
  }

  for (let row of squares) {
    if (!rowCheck(row)) return false;
  }

  // true
  return true;
}

function rowCheck(row) {
  if (row.length !== 9) return false;

  const obj = pairs();

  for (let num of row) {
    if (num < 1 || num > 9) return false;
    if (obj[num] === 0) {
      obj[num] += 1;
    } else {
      return false;
    }
  }

  return true;
}

function pairs() {
  const obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  return obj;
}

// class User {
//   constructor() {
//     this.rank = Math.max(8, Math.min(this.rank, -8));

//     this.progress = 0;
//   }

//   incProgress(activity_rank) {
//     if (activity_rank === this.rank - 1) return this.addPoints(1);
//     if (activity_rank === this.rank) return this.addPoints(3);
//     if (activity_rank < this.rank) return this.addPoints(0);

//     const d = activity_rank - this.rank;

//     return this.addPoints(10 * d * d);
//   }

//   addPoints(points) {
//     const total = this.progress + points;

//     if (total < 100) this.progress = total;
//     if (total >= 100) {
//       if (this.rank === -1) {
//         this.rank = 1;
//       } else if (this.rank === 8) {
//       } else {
//         this.rank += 1;
//       }
//       this.progress = total - 100;
//     }
//   }
// }

// const user = new User();
// console.log("rank", user.rank);
// console.log("progress", user.progress);
// user.incProgress(-7);
// console.log("after inc progress, must be 10", user.progress);
// user.incProgress(-5);
// console.log("after inc progress, must be 0", user.progress);
// console.log("rank, must be -7", user.rank);
