//* Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you
// may return the result in any order.



//* Example 1:
// const nums1 = [2, 2, 1, 4, 5, 6, 7, 8,], nums2 = [2, 2, 3, 8] // Output: [2,2,8]
//* Example 2:
// const nums1 = [4,9,5], nums2 = [9,4,9,8,4] // Output: [4,9]
//? Explanation: [9,4] is also accepted.
//* Example 3:
// const nums1 = [4,9], nums2 = [4,9] // Output: [4,9]
//* Example 4:
// const nums1 = [1,2,2,1], nums2 = [2,2] // Output: [2,2]
//* Example 5:
// const nums1 = [4,9,5], nums2 = [9,4,9,8,4] // Output: [4,9]
//* Example 6:
// const nums1 = [1, 1, 0, 2], nums2 = [1, 1, 2]// Output: [4,9]

//! Constraints:
//! 1 <= nums1.length, nums2.length <= 1000
//! 0 <= nums1[i], nums2[i] <= 1000

//TODO Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you
// cannot load all elements into the memory at once ?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    let i = 0;
    let j = 0;

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++
        }
    }
    return result;
}

console.log(intersect(nums1, nums2))

