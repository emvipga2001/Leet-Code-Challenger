/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    let count = 0;
    meetings.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < meetings.length; i++) {
        let max = meetings[i][1];
        let min = meetings[i][0];
        while (i + 1 < meetings.length && max >= meetings[i + 1][0]) {
            max = Math.max(max, meetings[i + 1][1]);
            i++;
        }
        count += max - min + 1;
    }

    return days - count;
};

console.log(countDays(days = 14, meetings = [[6,11],[7,13],[8,9],[5,8],[3,13],[11,13],[1,3],[5,10],[8,13],[3,9]]));
