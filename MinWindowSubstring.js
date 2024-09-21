function MinWindowSubstring(s, t) {
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1);
  }
  let l = 0;
  let size = map.size;
  let res = "";
  let min = Infinity;
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r])) {
      map.set(s[r], (map.get(s[r]) || 0) - 1);
      if (map.get(s[r]) == 0) {
        size--;
      }
    }

    while (size == 0) {
        if (map.has(s[l])) {
            map.set(s[l], (map.get(s[l]) || 0) + 1);
            if (map.get(s[l]) > 0) {
                if(min > s.slice(l,r+1).length){
                    min = s.slice(l,r+1).length;
                    res = s.slice(l,r+1);
                }
                size++;
            }
        }
        l++;
    }
  }
  // code goes here
  return res;
}

// keep this function call here
console.log(MinWindowSubstring("ahffaksfaje", "jefa"));

// ahffaksfaje
// 
