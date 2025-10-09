/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let res = 0;
    let n = points.length;
    let ponit = new Array(n).fill(Infinity);
    let check = new Array(n).fill(false);
    let edge = 0;
    let currNode = 0;

    while (edge < n - 1) {

        let nextNode = -1;
        let [startX, startY] = points[currNode];
        check[currNode] = true;

        for (let i = 0; i < n; i++) {
            if(check[i]) continue;
            let [endX, endY] = points[i];
            let tempManhattan = Math.abs(startX - endX) + Math.abs(startY - endY)
            ponit[i] = Math.min(tempManhattan, ponit[i]);
            
            if (nextNode == -1 || ponit[i] < ponit[nextNode]) {
                nextNode = i;
            }
        }

        res += ponit[nextNode];
        currNode = nextNode;
        edge++;
    }

    return res;
};

console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));
