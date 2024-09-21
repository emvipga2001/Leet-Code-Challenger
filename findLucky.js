/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var map = new Map();
    var temp = -1;
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i],map.has(arr[i]) ? map.get(arr[i]) + 1 : 1);
    }
    Array.from(map, ([key, value]) => {
        if(value == key && key > temp){
            temp = key;
        }
    })
    return temp;
};

findLucky([2,2,3,3,3])