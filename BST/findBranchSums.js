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
const bst = new BST(10);
bst.insert(2)
  .insert(23)
  .insert(3)
  .insert(24)
  .insert(4)
  .insert(5)
  .insert(6)
  .insert(7)
  .insert(8)
  .insert(9)
  .insert(10);

//------ SOLUTION ------//
//! Recursive solution:
//* Time complexity O() on average, O() - worst case
//* Space complexity O() on average, O() - worst case

// function findBstBranchSumsHelper(tree, target, closest) {
// }

function findBstBranchSums(tree) {
  let res = [];
  helperCalcBranchSums(tree, 0, res);
  return res;
}

function helperCalcBranchSums(node, runningSum, res) {
  if (!node) return;
  
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    res.push(newRunningSum);
    return;
  }

  helperCalcBranchSums(node.left, newRunningSum, res);
  helperCalcBranchSums(node.right, newRunningSum, res);
}

///* TEST *///
// console.log(bst);
console.log('result -> findBstBranchSums:', findBstBranchSums(bst), bst);
