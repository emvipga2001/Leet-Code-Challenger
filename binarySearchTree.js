class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value);
    }


    searchNode(node, value) {
        if (!node) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value)
        }else if(value > node.value) {
            return this.searchNode(node.right, value)
        }else{
            return true;
        }
    }

}

const bst = new binarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);


console.log(bst.search(6)); // true
console.log(bst.search(11)); // false