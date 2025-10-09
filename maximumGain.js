/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let proMax = x > y ? 'ab': 'ba';
    let proMin = x <= y ? 'ab': 'ba';
    let stack = [];
    let stackX = [];
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (stack[stack.length - 2] + stack[stack.length - 1] == proMax) {
            res += Math.max(x, y);
            stack.pop();
            stack.pop();
        }
    }

    for (let i = 0; i < stack.length; i++) {
        stackX.push(stack[i]);
        if (stackX[stackX.length - 2] + stackX[stackX.length - 1] == proMin) {
            res += Math.min(x, y);
            stackX.pop();
            stackX.pop();
        }
    }

    return res;
};

console.log(maximumGain(s = "aabbabkbbbfvybssbtaobaaaabataaadabbbmakgabbaoapbbbbobaabvqhbbzbbkapabaavbbeghacabamdpaaqbqabbjbababmbakbaabajabasaabbwabrbbaabbafubayaazbbbaababbaaha", x = 1926, y = 4320));
