/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = "";
    let n = Math.max(a.length, b.length);
    let obj = {
        0 : 0o0,
        1 : 0o1,
        2 : 10,
        3 : 11
    }

    let remember = 0;
    for (let i = 1; i <= n; i++) {
        let valA = a[a.length - i] ?? 0;
        let valB = b[b.length - i] ?? 0;
        valA = Number(valA)
        valB = Number(valB)
        let sum = obj[valA + valB + remember];
        remember = Math.floor(sum * 0.1);
        res = (sum % 2) + res;
        if(i == n && remember == 1) res = remember + res;
    }

    return res;
};

console.log(addBinary(a = "1010", b = "1011"));
