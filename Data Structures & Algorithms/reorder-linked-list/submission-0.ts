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
   * @return {void}
   */
  reorderList(head: ListNode | null): void {
    const mid = this.findMid(head);
    
    const secondHalf = mid.next;
    mid.next = null;

    const reversed2ndHalf = this.reverse(secondHalf);

    head = this.mergeAlternating(head, reversed2ndHalf);
  }

  findMid(head: ListNode | null): ListNode {
    let fast = head,
      slow = head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  reverse(head: ListNode | null): ListNode {
    let node = head;
    let prev = null;
    let next = null;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  }

  mergeAlternating(a: ListNode | null, b: ListNode | null) {
    const head = a; 
    let aa = head, bb = b;
    while (bb !== null) {
      const tempA = aa.next;
      const tempB = bb.next;
      aa.next = bb;
      bb.next = tempA;
      aa = tempA;
      bb = tempB;
    }
    return head;
  }
}
