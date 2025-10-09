/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let codeS = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (codeS[s[i]]) {
            stack.push(s[i]);
        }else{
            if (codeS[stack[stack.length - 1]] != s[i]) return false;
            stack.pop();
        }
    }

    return stack.length == 0;
};

console.log(isValid("([])"));
