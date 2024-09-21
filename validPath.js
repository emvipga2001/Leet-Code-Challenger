/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let parent = new Array(n)
    let rank = new Array(n)
    for (let i = 0; i < n; i++) {
        parent[i] = i;  
        rank[i] = 1;  
    }

    function find(v){
        if( v != parent[v] ){
            parent[v] = find(parent[v])
        }
        return parent[v];
    }

    function union(a, b) {
        let parA = find(a);
        let parB = find(b);

        if(parA != parB){
            if (rank[parA] > rank[parB]) {
                parent[parB] = parA;
            } else if (rank[parA] < rank[parB]) {
                parent[parA] = parB;
            } else {
                parent[parB] = parA;
                rank[parA]++;
            }
        }
    }

    for (let i = 0; i < edges.length; i++) {
        const [x, y] = edges[i]
        union(x, y)
    }

    return parent[source] == parent[destination];
};

validPath(n = 10, edges = [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], source = 7, destination = 5)