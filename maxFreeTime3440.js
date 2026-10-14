/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    let gaps = [];
    let n = startTime.length;
    let res = 0;

    // Khoảng trống đầu tiên: từ mốc 0 đến cuộc họp 0
    gaps.push(startTime[0]);

    for (let i = 0; i < n; i++) {
        if (i < n - 1){
            gaps.push(startTime[i + 1] - endTime[i]);
        }
    }
    
    gaps.push(eventTime - endTime[n - 1]);
    if(gaps.length == 0) {
        return 0;
    }
    if(gaps.length == 2) {
        return gaps[0] + gaps[1];
    }
    if(gaps.length == 1) {
        return gaps[0];
    }

    // Tạo danh sách đối tượng gồm giá trị và chỉ số ban đầu
    const indexedGaps = gaps.map((val, idx) => ({ val, idx }));
    // Sắp xếp mảng phụ này giảm dần theo val:
    indexedGaps.sort((a, b) => b.val - a.val);
    // Lấy 3 phần tử đầu tiên làm Top 3:
    const top3 = indexedGaps.slice(0, 3);

    for (let i = 0; i < startTime.length; i++) {
        let d = endTime[i] - startTime[i];
        let maxGap = 0;
        for (const item of top3) {
            if (item.idx !== i && item.idx !== i + 1) {
                maxGap = item.val;
                break; // Vì top3 đã xếp giảm dần, phần tử hợp lệ đầu tiên chính là lớn nhất!
            }
        }

        // Giờ bạn chỉ cần so sánh maxGap với d:
        let freeTime = 0;
        if (maxGap >= d) {
            freeTime = gaps[i] + gaps[i + 1] + d;
        } else {
            freeTime = gaps[i] + gaps[i + 1];
        }
        
        res = Math.max(res, freeTime);
    }

    return res;
};

console.log(maxFreeTime(eventTime = 10, startTime = [0,3,7,9], endTime = [1,4,8,10]));
