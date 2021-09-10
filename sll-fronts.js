// Write a method that accepts a value and 
//creates a new node, assign it to the list val, 
//and return a pointer to the new val node.
class SLLNode {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.val = null;
    }

    addFront(val) {
        var newNode = new SLLNode(val);
        newNode.next = this.val;
        this.val = newNode;
        return this;
    }

    // Write a method to remove the val node and 
    // return the new list val node. 
    // If the list is empty, return null.
    removeFront() {
    	if (!this.head) {
            return("list.head is null")
        }
        this.head = this.head.next;
    }

    // Write a method to return the value (not the node) at the 
    // head of the list. If the list is empty, return null.    

    front() {
        if(!this.head) {
            return("list.head is null")
        }
        var value = this.head.data;
        return value;
    }

}

var mySLL = new SLL();
mySLL.addFront(20).addFront(10).addFront(5).addFront(1).addFront(8);

console.log(mySLL);
// mySLL.removeFront();
// front(mySLL);

const print = (val) =>
{
    var x = val;
    while (x != null)
    {
        console.log(x.data + ", ");
        x = x.next;
    }
}

print(mySLL);