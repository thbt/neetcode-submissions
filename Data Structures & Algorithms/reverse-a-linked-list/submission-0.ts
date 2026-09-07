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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;
        let node = head;

        while (node) {
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }

        return prev;
    }
}
