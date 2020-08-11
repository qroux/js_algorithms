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

  //return "Red", "Yellow" or "Draw"
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

    const regexR = /R{4}/;
    const regexY = /Y{4}/;

    for (let r of grid) {
      const string = r.join("");
      if (string.match(regexR) || string.match(regexY)) {
        return player;
      }
    }

    for (let i = 0; i <= 6; i++) {
      const col = [
        grid[0][i],
        grid[1][i],
        grid[2][i],
        grid[3][i],
        grid[4][i],
        grid[5][i],
      ].join("");
      if (col.match(regexR) || col.match(regexY)) {
        return player;
      }
    }

    // BOTTOM UP
    const bu_arr = [];
    const diag_string = [];

    let start_row = 3;
    let start_column = 0;

    while (start_row >= 0) {
      let row_index = 3;
      let column_index = 0;

      //grid[3][0] + grid[2][1] + grid[1][2] + grid [0][3]

      while (row_index >= 0 && column_index <= 6) {
        diag_string.push(grid[row_index][column_index]);
        console.log(
          "case =",
          grid[row_index][column_index],
          "diag =",
          diag_string,
          "row",
          row_index,
          "column",
          column_index
        );
        column_index++;
        row_index--;
      }

      console.log("------------------fin INTRA");

      start_row--;
    }

    //console.log(column, player, grid[dic[column]])
  }
  console.log("----------fin ACTION");

  return "Draw";
}

const sequence = [
  "C_Yellow",
  "E_Red",
  "G_Yellow",
  "B_Red",
  "D_Yellow",
  "B_Red",
  "B_Yellow",
  "G_Red",
  "C_Yellow",
  "C_Red",
  "D_Yellow",
  "F_Red",
  "E_Yellow",
  "A_Red",
  "A_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "F_Yellow",
  "D_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "A_Red",
  "G_Yellow",
  "D_Red",
  "D_Yellow",
  "C_Red",
];

console.log(whoIsWinner(sequence));

// function whoIsWinner(piecesPositionList) {
//   const dic = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

//   const grid = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//   ];

//   // // TOP BOTTOM
//   // let AA_TB = grid[0][0] + grid[1][1] + grid[2][2] grid[5][5] r = c

//   // en dessous
//   // let BA_TB = grid[1][0] + grid[2][1] max grid[5][4] r = c + 1
//   // let CA_TB = grid[2][0] + grid[3][1] r = c + 2
//   // au dessus
//   // let AB_TB = grid[0][1] + grid[5][6] c = r + 1
//   // let AC_TB = grid[0][2] + grid[4][6] c = r + 2
//   // let AD_TB = grid[0][3] + grid[3][6] c = r + 3

//   // // BOTTOM UP
//   // let FA_BU = grid[5][0] + grid[4][1] + grid[3][2] grid[2][3] r - 1 et c + 1 r commence à 5 et c commence à 0

//   // en dessous
//   // let FB_BU = grid[5][1] + grid[4][2] grid[3][3] grid[2][4] grid[1][5] max grid[0][6] r - 1 et c + 1 r commence à 5 et c commence à 1
//   // let FC_BU = grid[5][2] + grid[4][3] grid[3][4] grid[2][5] max grid[1][6] r - 1 et c + 1 r commence à 5 et c commence à 2
//   // let FD_BU = grid[5][3] + grid[4][4] grid[3][5] max grid[2][6] r - 1 et c + 1 r commence à 5 et c commence à 3

//   // au dessus
//   // let EA_BU = grid[4][0] + grid[3][1] grid[2][2] grid[1][3] grid[0][4] r - 1 et c + 1 r commence à 4 et c commence à 0
//   // let DA_BU = grid[3][0] + grid[2][1] grid[1][2] grid[0][3] c = r + 2

//   //return "Red", "Yellow" or "Draw"
//   for (let action of piecesPositionList) {
//     const letter = action.split("_")[0];
//     const player = action.split("_")[1];

//     let level = 5;

//     while (grid[level][dic[letter]] !== 0 && level >= 0) {
//       level--;
//     }

//     if (player === "Red") {
//       grid[level][dic[letter]] = "R";
//     } else {
//       grid[level][dic[letter]] = "Y";
//     }

//     const regexR = /R{4}/;
//     const regexY = /Y{4}/;

//     for (let r of grid) {
//       const string = r.join("");
//       if (string.match(regexR) || string.match(regexY)) {
//         return player;
//       }
//     }

//     for (let i = 0; i <= 6; i++) {
//       const col = [
//         grid[0][i],
//         grid[1][i],
//         grid[2][i],
//         grid[3][i],
//         grid[4][i],
//         grid[5][i],
//       ].join("");
//       if (col.match(regexR) || col.match(regexY)) {
//         return player;
//       }
//     }

//     // BOTTOM UP
//     const bu_arr = [];
//     const diag_string = [];

//     let start_row = 3;
//     let start_colum = 0;

//     while (start_row >= 0) {
//       let column_index = start_colum

//       while(grid[start_row][column_index]) {
//         diag_string.push(grid[start_row][column_index)
//         column_index++
//       }

//       bu_arr.push(diag_string.join(''))
//       start_row--
//     }

//     // while (start_row <= 0) {
//     //   diag_string.push(grid[start_row][start_colum]);
//     //   start_row--;
//     //   start_column--;
//     // }

//     // bu_arr.push(diag_string.join(""));

//     // diag_string;

//     //console.log(column, player, grid[dic[column]])
//   }

//   console.log(grid);

//   return "Draw";
// }
