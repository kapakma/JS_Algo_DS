function ListNode(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.isEmpty = function() {
    return !this.length;
}

LinkedList.prototype.insert = function(value) {
    if (this.isEmpty()) {
        this.head = new ListNode(value);
    }
    else {
        const tempNode = new ListNode(value);
        tempNode.next = this.head;
        this.head = tempNode;
    }
    this.length++;
}

LinkedList.prototype.delete = function(value) {
    if (!this.isEmpty()) {
        if (this.head.data == value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        else {
            let prevNode = this.head,
                currNode = this.head.next;

            while (currNode) {
                if (currNode.data == value) {
                    prevNode.next = currNode.next;
                    currNode = null;
                    this.length--;
                    return true;
                }
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
    }

    return false;
}

LinkedList.prototype.deleteAtHead = function() {
    let value = null;
    
    if (!this.isEmpty()) {
        value = this.head.data;
        this.head = this.head.next;
        this.length--;
    }

    return value;
} 

LinkedList.prototype.find = function(value) {
    let tempNode = this.head;
    while (tempNode) {
        if (tempNode.data == value) {
            return true;
        } 
        tempNode = tempNode.next;
    }

    return false;
}

LinkedList.prototype.get = function(index) {
    if (!this.isEmpty()) {
        let count = 0,
            tempNode = this.head;

        while (tempNode) {
            if (count == index) {
                return tempNode.data;
            }

            tempNode = tempNode.next;
            count++;
        }
    }

    return null;
}

LinkedList.prototype.valueOf = function() {
    let arr = [],
        tempNode = this.head;
    
    while (tempNode) {
        arr.push(tempNode.data);
        tempNode = tempNode.next;
    }

    return arr;
}

LinkedList.prototype.toString = function() {
    return this.valueOf().toString();
}