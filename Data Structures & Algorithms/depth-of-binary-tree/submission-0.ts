/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null, depth = 0): number {
        if (root == null) return 0;

        let leftDepth = 0, rightDepth = 0;
        if (root.left !== null) leftDepth = this.maxDepth(root.left, depth + 1);
        if (root.right !== null) rightDepth = this.maxDepth(root.right, depth + 1);

        return 1 + Math.max(leftDepth, rightDepth);
    }
}
