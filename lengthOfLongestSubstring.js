/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let set = new Set();
//     let res = 0;
//     if (s.length == 1) return 1;

//     for (let i = 0; i < s.length; i++) {
//         set.add(s[i]);
//         for (let j = i + 1; j < s.length; j++) {
//             if (set.has(s[j])) {
//                 break;
//             }
//             set.add(s[j]);
//         }
//         res = Math.max(set.size, res);
//         set = new Set();
//     }

//     return res;
// };

var lengthOfLongestSubstring = function(s) {
    const newMap = new Map()
    let maxLength = 0;
    let left = 0;
    
    for(let right = 0;right<s.length;right++){
        const currChar = s[right];

        if(newMap.has(currChar)){
            left = Math.max(left,newMap.get(currChar)+1)
        }
        newMap.set(currChar,right)
        maxLength = Math.max(maxLength,right-left+1)
    }
    
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));