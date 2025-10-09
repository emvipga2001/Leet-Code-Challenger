function checkDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}
console.log(checkDuplicate([1,2,3,3]));
