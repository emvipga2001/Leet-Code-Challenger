/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    let M = [];
    let L = new Map();
    let R = new Map();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i - j == 0) {
                M.push(grid[i][j])
            }else if(i - j < 0) {
                R.set(i - j, R.has(i - j) ? [...R.get(i - j), grid[i][j]] : [grid[i][j]])
            }else{
                L.set(i - j, L.has(i - j) ? [...L.get(i - j), grid[i][j]] : [grid[i][j]])
            }
        }
    }

    M.sort((a, b) => b - a)
    for (let i = 0; i < M.length; i++) {
        grid[i][i] = M[i];
    }
    L.forEach((v, k) => {
        v.sort((a, b) => b - a)
        let j = Math.abs(k);
        for (let x = 0; x < v.length; x++) {
            grid[j][x] = v[x];
            j++;
        }
    })
    R.forEach((v, k) => {
        v.sort((a, b) => a - b)
        let j = Math.abs(k);
        for (let x = 0; x < v.length; x++) {
            grid[x][j] = v[x];
            j++;
        }
    })

    return grid
};

console.log(sortMatrix([[1,7,3],[9,8,2],[4,5,6]]));
