/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    X = 0
    for (let i = 0; i < operations.length; i++) {
        if(operations[i][0] == '+' || operations[i][2] == '+'){
            X++
        }else{
            X--
        }
    }
    return X
};

finalValueAfterOperations(["++X","++X","X++"])