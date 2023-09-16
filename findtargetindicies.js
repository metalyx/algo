var targetIndices = function (nums, target) {
    const sorted = nums.sort((a, b) => a - b)

    let l = 0
    let r = sorted.length - 1

    let startIndex = -1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        console.log(l, r)
        if (sorted[mid] >= target) {
            r = mid - 1
            startIndex = mid
        } else if (sorted[mid] < target) {
            l = mid + 1
        }
    }

    let endIndex = startIndex

    l = startIndex
    r = sorted.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (sorted[mid] === target) {
            endIndex = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    let result = []

    for (let i = startIndex; i <= endIndex; i++) {
        result.push(i)
    }

    return result
}

console.log(targetIndices([1, 2, 2, 2, 2, 3, 5], 2))
