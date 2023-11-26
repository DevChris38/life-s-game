function draw() {
  ctx.clearRect(0, 0, 999, 999);
  ctx.lineWidth = 0.1;

  for (let i = 0; i < 1000; i += 20) {
    for (let j = 0; j < 1000; j += 20) {
      ctx.strokeRect(i, j, 20, 20);
    }
  }

  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      if (plateau[i][j][1] === 1) {
        plateau[i][j][0] = true;
      } else {
        plateau[i][j][0] = false;
      }
      if (plateau[i][j][0] === true) {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(i * 20, j * 20, 20, 20);
      }
    }
  }
}
