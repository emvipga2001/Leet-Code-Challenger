/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let round = new Array(n).fill(0);
    round[rounds[rounds.length - 1] - 1]++;
    let max = 0;
    for (let i = 0; i < rounds.length - 1; i++) {
        let [start, end] = [rounds[i], rounds[i + 1]]
        while (start != end && start <= n) {
            round[start - 1]++;
            max = Math.max(max, round[start - 1])
            start++;
            if (start > n) {
                start = 1;
            }
        }
    }

    let res = [];
    round.forEach((v, i) => {if (max == v) res.push(i + 1)})
    return res
};

console.log(mostVisited(n = 2, rounds = [2,1,2,1,2,1,2,1,2]));
