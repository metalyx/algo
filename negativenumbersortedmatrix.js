/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let counter = 0

    for (let i = 0; i < grid.length; i++) {
        counter += countNegInRow(grid[i])
    }

    return counter
}

function countNegInRow(row) {
    let l = 0
    let r = row.length - 1

    let lastNegIndex = -1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        console.log(l, r)

        if (l === r && row[l] < 0) {
            return row.length - l
        } else if (l === r) {
            break
        }

        if (row[mid] >= 0) {
            l = mid + 1
            continue
        }

        if (row[mid] < 0) {
            lastNegIndex = mid
            r = mid - 1
        }
    }

    if (lastNegIndex > -1) {
        return row.length - lastNegIndex
    }

    return 0
}

console.log(
    countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
    ])
) //8
