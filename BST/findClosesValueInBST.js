class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currNode = this;
    while (true) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = new BST(value);
          break;
        } else {
          currNode = currNode.left;
          break;
        }
      } else {
        if (currNode.right === null) {
          currNode.right = new BST(value);
          break;
        } else {
          currNode = currNode.right;
        }
      }
    }
    return this;
  }
}

//? Find closest absolute value in a BST ?//
const bst = new BST(1);
bst.insert(10).insert(12).insert(2).insert(4).insert(23).insert(7).insert(13);

//------ SOLUTION ------//
//! Recursive solution:
//* Time complexity O(log(N)) on average, O(N) - worst case
//* Space complexity O(log(N)) on average, O(N) - worst case

// function findClosestValue(tree, target) {
//   return findClosestValueHelper(tree, target, tree.value)
// }

// function findClosestValueHelper(tree, target, closest) {
//   if (!tree) return closest;
//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value;
//   }
//   if (target < tree.value) {
//     return findClosestValueHelper(tree.left, target, closest)
//   } else if (target > tree.value) {
//     return findClosestValueHelper(tree.right, target, closest)
//   } else {
//     return closest
//   }
// }


//! Iterative solution:
//* Time complexity O(log(N)) on average, O(N) - worst case
//* Space complexity O(1) on average, O(1) - worst case

function findClosestValue(tree, target) {
  let closest = Infinity;
  let currNode = tree;

  while (currNode) {
    if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
      closest = currNode.value;
    }

    if (target < currNode.value) currNode = currNode.left;
    else if (target > currNode.value) currNode = currNode.right;
    else break;
  }
  return closest;
}


///* TEST *///
console.log(bst);
console.log('result -> findClosestValue:', findClosestValue(bst, 14));

