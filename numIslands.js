/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;

  function dfs(x, y) {
    // Điều kiện thoát: Nếu vượt quá giới hạn hoặc gặp nước ('0'), dừng lại
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] == 0
    ) {
      return;
    }

    // Đánh dấu ô này đã được thăm
    grid[x][y] = 0;

    // Duyệt theo 4 hướng: trên, dưới, trái, phải
    dfs(x + 1, y); // xuống
    dfs(x - 1, y); // lên
    dfs(x, y + 1); // phải
    dfs(x, y - 1); // trái
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        dfs(i, j);
        res++;
      }
    }
  }
  return res;
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);
