var searchMatrix = function (matrix, target) {
    let left = {
        row: 0,
        col: 0
    } 

    let right = {
        row: matrix.length - 1,
        col: matrix[0].length - 1
    }

    while (left.row <= right.row || left.col <= right.col) {
        let mid = {
            row: parseInt((left.row + right.row) / 2),
            col: parseInt((left.col + right.col) / 2)
        }

        if (matrix[mid.row][mid.col] < target) {
            left.row =
        }
    }
}

console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        3
    )
)
