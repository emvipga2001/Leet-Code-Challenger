/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let n = players.length;
    let m = trainers.length;
    while (i < n && j < m) {
        if (players[i] <= trainers[j]) {
            i++;
        }
        j++;
    }

    return i;
};

console.log(matchPlayersAndTrainers(players = [1,1,1], trainers = [10]));
