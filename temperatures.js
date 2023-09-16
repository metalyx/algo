/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stack = []
    const result = Array.from(temperatures).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length === 0) {
            stack.push([i, temperatures[i]])
        } else {
            while (
                stack.length > 0 &&
                temperatures[i] > stack[stack.length - 1][1]
            ) {
                const top = stack.pop()

                result[top[0]] = i - top[0]
            }

            stack.push([i, temperatures[i]])
        }
    }

    return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
