function slidingWindow(params, size) {
    
    // Time: O(n * size)
    // let res = 0;
    // for (let i = 0; i <= params.length - size; i++) {
    //     let l= i;
    //     let r = i + size;
    //     let sum = 0;
    //     while (r > l) {
    //         sum += params[l++]
    //     }
    //     res = Math.max(res, sum)
    // }
    // return res;

    // Time: O(n)
    let res = 0;

    for (let i = 0; i < size; i++) {
        res += params[i]
    }

    let maxRes = res

    for (let i = size; i < params.length; i++) {
        res = res - params[i - size] + params[i]
        maxRes = Math.max(res, maxRes)
    }
    return maxRes;
}

slidingWindow([1,2,3,4,5,6,7,8,9], 4)