// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root) return [];

  const arr = [root];
  const counter = [1];
  let level = 0;

  while (arr.length) {
    const node = arr.shift();

    if (node.children) {
      level++;
      arr.push(...node.children);
      if (counter[level]) {
        counter[level] += node.children.length;
      } else {
        counter[level] = node.children.length;
      }
      level--;
    } else {
      level--;
    }
  }

  return counter;
}

module.exports = levelWidth;
