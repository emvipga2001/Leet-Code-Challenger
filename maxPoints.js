/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length === 1) return Math.max(...points[0]);

    let prevRow = points[0];
    
    for (let r = 1; r < points.length; r++) {
        let currRow = points[r].slice();
        
        let leftMax = Array(points[r].length).fill(0);
        let rightMax = Array(points[r].length).fill(0);
        
        // Tính toán giá trị tối đa từ trái sang phải
        leftMax[0] = prevRow[0];
        for (let c = 1; c < points[r].length; c++) {
            leftMax[c] = Math.max(leftMax[c - 1] - 1, prevRow[c]);
        }
        
        // Tính toán giá trị tối đa từ phải sang trái
        rightMax[points[r].length - 1] = prevRow[points[r].length - 1];
        for (let c = points[r].length - 2; c >= 0; c--) {
            rightMax[c] = Math.max(rightMax[c + 1] - 1, prevRow[c]);
        }
        
        // Kết hợp lại để có điểm tối đa cho mỗi cột ở hàng hiện tại
        for (let c = 0; c < points[r].length; c++) {
            currRow[c] += Math.max(leftMax[c], rightMax[c]);
        }
        
        // Cập nhật giá trị của hàng trước bằng hàng hiện tại đã tính toán
        prevRow = currRow;
    }
    
    // Trả về điểm tối đa ở hàng cuối cùng
    return Math.max(...prevRow);
};

maxPoints([[1,2,3],[1,5,1],[3,1,1]])