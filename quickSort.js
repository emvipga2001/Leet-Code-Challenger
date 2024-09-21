
function partition(arr, left, right) {
    var p = left;
    for (let i = left + 1; i <= right; i++) {
        if (arr[left] > arr[i]) {
            p++;
            [arr[p], arr[i]] = [arr[i], arr[p]];
        }
    }
    [arr[left], arr[p]] = [arr[p], arr[left]];
    return p;
}

function quickSort(arr, l, r) {
    if (l >= r) return;
    let pi = partition(arr, l, r);

    quickSort(arr, l, pi - 1);
    quickSort(arr, pi + 1, r);
}
var arr = [5,9,4,2,7,6,8,1,3]
quickSort(arr,0,arr.length - 1)
console.log(arr);
