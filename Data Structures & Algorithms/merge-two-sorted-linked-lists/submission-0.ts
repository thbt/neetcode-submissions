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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const head = new ListNode(0, null);
        let node = head;
        
        let p1 = list1, p2 = list2;

        while (p1 != null && p2 != null) {
            if (p1.val < p2.val) {
                node.next = p1;
                p1 = p1.next;
            } else {
                node.next = p2;
                p2 = p2.next;
            }
            node = node.next;
        }

        if (p1 != null) {
            node.next = p1;
        } else if (p2 != null) {
            node.next = p2;
        }

        return head.next;
    }

}
