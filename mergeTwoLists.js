/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  function ListNode(val, next) {
//    this.val = (val===undefined ? 0 : val)
//    this.next = (next===undefined ? null : next)
// }
class Node {
    constructor(data) {
        this.val = data; // Dữ liệu của node
        this.next = null; // Con trỏ tới node kế tiếp, ban đầu là null
    }
}
class ListNode{
    constructor(){
        this.head = null
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode; 
        }
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(productList1, productList2) {

    if(!productList1) return productList2;
    if(!productList2) return productList1;
    if(!productList1 && !productList2) return null;
    // 1 < 3
    // 2 < 3
    // 4 < 3
    // 4 < 4
    if(productList1.val < productList2.val) {
        productList1.next = mergeTwoLists(productList1.next, productList2);
        return productList1;
    } else {
        productList2.next = mergeTwoLists(productList1, productList2.next);
        return productList2;
    }
};

list1 = [1,2,4], list2 = [1,3,4]

const productList1 = new ListNode();
productList1.push(list1[0])
productList1.push(list1[1])
productList1.push(list1[2])

const productList2 = new ListNode();
productList2.push(list2[0])
productList2.push(list2[1])
productList2.push(list2[2])
var a = mergeTwoLists(productList1.head, productList2.head)
console.log();