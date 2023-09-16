/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const sortedPos = []
    const sortedSpeed = []

    const combined = position.map((pos, index) => ({
        position: pos,
        speed: speed[index],
    }))

    combined.sort((a, b) => a.position - b.position)

    combined.forEach((item) => {
        sortedPos.push(item.position)
        sortedSpeed.push(item.speed)
    })

    const stack = []

    for (let i = sortedPos.length - 1; i >= 0; i--) {
        const pos = sortedPos[i]
        const sp = sortedSpeed[i]

        stack.push((target - pos) / sp)

        if (
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        ) {
            stack.pop()
        }
    }

    return stack.length
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]))
