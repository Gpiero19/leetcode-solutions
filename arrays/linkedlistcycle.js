/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */



class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        curent = this.head
        visitedNodes = new Set();

        while (current) {
            if (visitedNodes.has(current)) {
                return true
            }   else {
                visitedNodes.add(current);
            }
            current = current.next
        }
        return false
    }
}
