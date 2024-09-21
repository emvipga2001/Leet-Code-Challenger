/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let curColor = image[sr][sc];
  function dfs(x, y) {
    if (
      x < 0 ||
      x >= image.length ||
      y < 0 ||
      y >= image[0].length ||
      image[x][y] == color ||
      image[x][y] !== curColor
    )
      return;

    image[x][y] = color;

    dfs(x + 1, y); // xuống
    dfs(x - 1, y); // lên
    dfs(x, y + 1); // phải
    dfs(x, y - 1); // trái
  }

  dfs(sr, sc);

  return image;
};

floodFill(
  (image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ]),
  (sr = 1),
  (sc = 1),
  (color = 2)
);
