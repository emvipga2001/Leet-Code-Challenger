/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const alphabetArray = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
        };
    let res = [0, 0]
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += widths[alphabetArray[s[i]]]
        if (count > 100) {
            count = 0
            res[0]++;
            i--;
        }
    }
    res[1] = count;
    count == 100 && res[0]++;
    return res;
};

console.log(numberOfLines(widths = [3,4,10,4,8,7,3,3,4,9,8,2,9,6,2,8,4,9,9,10,2,4,9,10,8,2], s = "mqblbtpvicqhbrejb"));
