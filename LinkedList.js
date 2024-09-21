// Định nghĩa một lớp Node để tạo các node trong danh sách liên kết
class Node {
    constructor(data) {
        this.data = data; // Dữ liệu của node
        this.next = null; // Con trỏ tới node kế tiếp, ban đầu là null
    }
}

// Định nghĩa lớp LinkedList để quản lý danh sách liên kết
class LinkedList {
    constructor() {
        this.head = null; // Node đầu tiên của danh sách liên kết
    }

    // Phương thức thêm một node vào cuối danh sách liên kết
    append(data) {
        const newNode = new Node(data); // Tạo một node mới
        if (!this.head) {
            this.head = newNode; // Nếu danh sách rỗng, node mới sẽ là node đầu tiên
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next; // Duyệt đến node cuối cùng của danh sách
        }
        current.next = newNode; // Gán con trỏ của node cuối cùng tới node mới
    }

    // Phương thức xuất ra màn hình danh sách các sản phẩm
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data); // In ra dữ liệu của node
            current = current.next; // Di chuyển đến node kế tiếp
        }
    }
}

// Tạo một linked list và thêm các sản phẩm vào danh sách
const productList = new LinkedList();
productList.append("Product 1");
productList.append("Product 2");
productList.append("Product 3");

// Xuất ra màn hình danh sách sản phẩm
console.log("Danh sách sản phẩm:");
productList.display();
