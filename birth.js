function birth(plateau) {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      if (plateau[i][j][0] === false) {
        let count = 0;
        if (i < 49) {
          plateau[i + 1][j][0] === true ? count++ : null;
        }
        if (j > 0) {
          plateau[i][j - 1][0] === true ? count++ : null;
          if (i < 49) {
            plateau[i + 1][j - 1][0] === true ? count++ : null;
          }
        }

        if (i > 0) {
          plateau[i - 1][j][0] === true ? count++ : null;

          if (j > 0) {
            plateau[i - 1][j - 1][0] === true ? count++ : null;
            if (j < 49) {
              plateau[i - 1][j + 1][0] === true ? count++ : null;
              plateau[i][j + 1][0] === true ? count++ : null;
              if (i < 49) {
                plateau[i + 1][j + 1][0] === true ? count++ : null;
              }
            }
          }
        }
        count !== 0 ? console.log(`cell[${i}, ${j}}] count = ${count}`) : null;
        if (count === 3) {
          plateau[i][j][1] = 1;
        }
      }
    }
  }
}
