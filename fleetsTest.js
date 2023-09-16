var carFleet = function (target, position, speed) {
    // creating an object that combines both positions and speeds
    const combined = position.map((pos, index) => ({
        position: pos,
        speed: speed[index],
    }))

    // sorting combined arrays
    combined.sort((a, b) => a.position - b.position)

    console.log(combined)
    // creating a stack
    const stack = []

    for (let i = combined.position.length - 1; i >= 0; i--) {
        const pos = combined.position[i]
        const sp = combined.speed[i]

        // appending time left till the target for the current car
        stack.push((target - pos) / sp)

        // if we have 2 or more cars in stack, that means that collision can occur
        // if time of the second car is less, that means they will 'stack' into a fleet
        if (
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        ) {
            stack.pop()
        }
    }

    // What left in our stack are the fleets
    return stack.length
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]))
