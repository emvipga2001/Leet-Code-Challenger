/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    let matrix = new Array(grid.length * 3).fill(null).map(() => new Array(grid[0].length * 3).fill(0));;
    let row = 0;
    let col = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == "/"){
                matrix[row][col+2] = 1;
                matrix[row+1][col+1] = 1;
                matrix[row+2][col] = 1;
            }else if(grid[i][j] == "\\"){
                matrix[row][col] = 1;
                matrix[row+1][col+1] = 1;
                matrix[row+2][col+2] = 1;
            }
            col += 3;
        }
        row += 3;
        col = 0;
    }

    function dfs(x, y){
        if(x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length || matrix[x][y] == 1){
            return;
        }
        matrix[x][y] = 1;

        dfs(x-1,y);
        dfs(x+1,y);
        dfs(x,y+1);
        dfs(x,y-1);
    }


    let res = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0){
                dfs(i, j)
                res++;
            }
        }
    }

    return res;
};

regionsBySlashes([" /\\"," \\/","\\  "]

)