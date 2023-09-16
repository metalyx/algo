/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0
    let r = height.length - 1

    let maxL = height[l]
    let maxR = height[r]

    let water = 0

    while (l < r) {
        if (maxL <= maxR) {
            l++
            maxL = Math.max(maxL, height[l])
            water += maxL - height[l]
        } else {
            r--
            maxR = Math.max(maxR, height[r])
            water += maxR - height[r]
        }
    }

    return water
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// 6
