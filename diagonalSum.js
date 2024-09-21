/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length
    let total = 0 
    for (let i = 0; i < n; i++) {
        total += mat[i][i];
        total += mat[n-1-i][i];
    }
    if(n%2 !== 0){
        total -= mat[Math.floor(n/2)][Math.floor(n/2)]
    }
    return total;
};

diagonalSum([[1,2,3,1],[4,5,6,1],[7,8,9,1],[10,11,12,1]])

// 1,2,3
//  \ /
// 4,5,6
//  / \
// 7,8,9