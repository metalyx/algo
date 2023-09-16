/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = []
    let maxArea = 0

    for (let i = 0; i < heights.length; i++) {
        if (stack.length === 0) {
            stack.push([i, heights[i]])

            continue
        }

        while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
            const area =
                stack[stack.length - 1][1] * (i - stack[stack.length - 1][0])

            maxArea = Math.max(maxArea, area)

            stack.pop()
        }

        stack.push([i, heights[i]])
    }

    return maxArea
}
// [1,
// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
// console.log(largestRectangleArea([2, 4]))
console.log(largestRectangleArea([2, 1, 2]))
