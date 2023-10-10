/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let left = 0
    let right = k - 1

    let result = 0
    let current = left
    let sum = 0

    while (right < arr.length) {
        if (current <= right) {
            sum += arr[current]
        } else {
            if (sum / k >= threshold) {
                result += 1
            }

            sum -= arr[left]
            sum += arr[current]

            left++
            right++
        }

        current += 1
    }

    return result
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4))

/*
Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
*/
