
//  Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}



// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
function reverseList(head) {
    if (!head) {
        return null
    }
    
    let newHead = head

    if(head.next) {
        newHead = reverseList(head.next)
        head.next.next = head
    }

    head.next = null
    return newHead

}

head = [0,1,2,3]
// head = [3,2,1,0]


console.log(reverseList(head))
