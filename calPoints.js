/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arrP = [];

    for (let i = 0; i < operations.length; i++) {
        if ( Number(operations[i]) && Number(operations[i]) >= 0 || Number(operations[i]) < 0) {
            arrP.push(Number(operations[i]))
            continue;
        }
        switch (operations[i]) {
            case '+':
                arrP.push(arrP[arrP.length - 1] + arrP[arrP.length - 2])
                break;
            case 'D':
                arrP.push(arrP[arrP.length - 1] * 2)
                break;
            case 'C':
                arrP.pop()
                break;
            default:
                break;
        }
    }

    return arrP.reduce((a, b) => a + b, 0)
};

console.log(calPoints(["5","2","C","D","+"]));
