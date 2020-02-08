/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 未完成
 */
function isUnivalTreeOne(root) {
  if (root === null) {
    return false;
  }

  if (root.right !== null && root.val !== root.right.val) {
    return false;
  }

  if (root.left !== null && root.val !== root.left.val) {
    return false;
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right);
}

// 未完成
function isUnivalTreeSet(root) {
  if (root === null) {
    return false;
  }
  const s = new Set();
  s.add(root.val);

  function getSetvals(root) {
    if (root.right !== null) {
      s.add(root.right.val);
      getSetvals(root.right);
    }
    if (root.left !== null) {
      s.add(root.left.val);
      getSetvals(root.left);
    }
  }

  getSetvals(root);
  return s.size === 0;
}
