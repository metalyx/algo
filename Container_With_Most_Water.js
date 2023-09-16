/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0
    let r = height.length - 1

    const areas = []

    while (l < r) {
        areas.push(getArea(l, r, height))

        // if (height[l] < height[l + 1]) {
        if (height[l] < height[r]) {
            l++
            continue
        }

        // if (height[r] < height[r - 1]) {
        if (height[r] < height[l]) {
            r--
            continue
        }

        l++
    }

    return Math.max(...areas)
}

function getArea(l, r, height) {
    const x = r - l

    const min = Math.min(height[l], height[r])

    return x * min
}

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Input: height = [1, 3, 2, 5, 25, 24, 5]
// Output: 24

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 3, 2, 5, 25, 24, 5]))
