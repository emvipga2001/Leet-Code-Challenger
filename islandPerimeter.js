/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let res = 0;

    function dfs(x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] == 0) return 0;

        return 1;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                let check = dfs(i - 1, j) +  dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1); 
                res += 4 - check;
            }
        }
    }

    return res;
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));
