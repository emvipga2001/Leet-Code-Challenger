function combinationSum2(candidates, target) {
  candidates = candidates.filter((val) => val <= target).sort((a, b) => a - b);
  let res = [];
  let temp = [];

  function backtrack(val, k) {
    if (val === target) {
      res.push([...temp]);
      return;
    }

    for (let i = k; i < candidates.length; i++) {
      // Bỏ qua phần tử trùng lặp ở cùng một cấp đệ quy
      if (i > k && candidates[i] === candidates[i - 1]) continue;

      if (val + candidates[i] > target) continue;

      temp.push(candidates[i]);
      backtrack(val + candidates[i], i + 1);
      temp.pop();
    }
  }

  backtrack(0, 0);

  return res;
}

combinationSum2(candidates = [10, 1, 2, 7, 6, 1, 5], target = 8)