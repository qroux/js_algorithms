function whoIsWinner(piecesPositionList) {
  const dic = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

  const grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  for (let action of piecesPositionList) {
    const letter = action.split("_")[0];
    const player = action.split("_")[1];

    let level = 5;

    while (grid[level][dic[letter]] !== 0 && level >= 0) {
      level--;
    }

    if (player === "Red") {
      grid[level][dic[letter]] = "R";
    } else {
      grid[level][dic[letter]] = "Y";
    }

    // Horizontal check
    for (let r of grid) {
      if (connectFour(r)) return player;
    }

    // Vertical check
    for (let i = 0; i <= 6; i++) {
      const col = [
        grid[0][i],
        grid[1][i],
        grid[2][i],
        grid[3][i],
        grid[4][i],
        grid[5][i],
      ];

      if (connectFour(col)) return player;
    }

    // Diagonal Check
    //  BOTTOM UP
    let diag_string = [];
    let start_row = 3;

    // from row 3 to row 5
    while (start_row <= 5) {
      let row_index = start_row;
      let column_index = 0;

      while (row_index >= 0 && column_index <= 6) {
        diag_string.push(grid[row_index][column_index]);
        column_index++;
        row_index--;
      }

      if (connectFour(diag_string)) return player;

      diag_string = [];
      start_row++;
    }

    // from row 5 at column 1 to column 3
    let start_column = 1;

    while (start_column <= 3) {
      let column_index = start_column;
      let row_index = 5;

      while (row_index >= 0 && column_index <= 6) {
        diag_string.push(grid[row_index][column_index]);
        column_index++;
        row_index--;
      }

      if (connectFour(diag_string)) return player;

      diag_string = [];
      start_column++;
    }

    // 2) TOP down
    // from row 4 col 6 to row 3 col 6
    start_row = 4;

    while (start_row <= 3) {
      let row_index = start_row;
      let column_index = 6;

      while (row_index >= 0 && column_index >= 0) {
        diag_string.push(grid[row_index][column_index]);
        column_index--;
        row_index--;
      }

      if (connectFour(diag_string)) return player;

      diag_string = [];
      start_row--;
    }

    // from row 5 column 3 to row 5 column 6
    diag_string = [];
    start_column = 3;

    while (start_column <= 6) {
      let column_index = start_column;
      let row_index = 5;

      while (row_index >= 0 && column_index >= 0) {
        diag_string.push(grid[row_index][column_index]);
        column_index--;
        row_index--;
      }

      if (connectFour(diag_string)) return player;

      diag_string = [];
      start_column++;
    }
  }

  return "Draw";
}

function connectFour(arr) {
  const regexR = /R{4}/;
  const regexY = /Y{4}/;

  const string = arr.join("");

  return string.match(regexR) || string.match(regexY);
}
