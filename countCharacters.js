/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let mapChars = new Map();
    let res = 0;

    for (let i = 0; i < chars.length; i++) {
        mapChars.set(chars[i], (mapChars.get(chars[i]) || 0) + 1);
    }

    for (let i = 0; i < words.length; i++) {
        let tempChars = new Map();
        let j;
        for (j = 0; j < words[i].length; j++) {
            tempChars.set(words[i][j], (tempChars.get(words[i][j]) || 0) + 1);
            if (!mapChars.has(words[i][j]) || tempChars.get(words[i][j]) > mapChars.get(words[i][j])) break;
        }
        if (j == words[i].length) {
            res += words[i].length;
        }
    }

    return res;
};

console.log(countCharacters(words = ["cat","bt","hat","tree","caaat"], chars = "atach"));
