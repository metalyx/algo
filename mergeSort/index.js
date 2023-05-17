/**
 * A merge sort function.
 * @param {number[]} array - Array of numbers to be sorted.
 * @returns {number[]}
 */
export function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Find mid index, if length/2 is odd -> take lower one
    const middleIndex = Math.floor(array.length / 2);

    // Take left part of initial array and sort it
    const leftSortedArray = mergeSort(array.slice(0, middleIndex));

    // Do the same to the right part
    const rightSortedArray = mergeSort(array.slice(middleIndex));

    return merge(leftSortedArray, rightSortedArray);
}

/**
 * Function accepts two sorted arrays and return single sorted array.
 * @param {number[]} leftArray First sorted array
 * @param {number[]} rightArray Second sorted array
 * @returns {number[]}
 */
function merge(leftArray, rightArray) {
    // make array for storing merged values
    const mergedArray = [];

    // while both array has values we compare first elements in each array
    // and push the smallest to the mergedArray
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            // Remove the element that we have pushed to the mergedArray
            mergedArray.push(leftArray.shift());
        } else {
            mergedArray.push(rightArray.shift());
        }
    }

    // return mergedArray, and if our left and right arrays
    // had not equal lengths, we just write them to the end
    // since they are the biggest ones
    return [...mergedArray, ...leftArray, ...rightArray];
}
