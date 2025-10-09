/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    let set = new Set();

    events.sort((a, b) => {
        set.add(a[0] + '|' + a[1])
        return a[0] - b[0]
    });

    
};

console.log(maxEvents([[1,2],[2,3],[3,4],[1,2]]));
