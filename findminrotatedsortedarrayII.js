var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1

    let min = nums[0]

    while (l < r) {
        let mid = Math.floor((l + r) / 2)

        if (min > nums[mid]) {
            min = nums[mid]
        }

        if (nums[mid] > nums[l]) {
            l = mid + 1
        } else if (nums[mid] < nums[l]) {
            r = mid - 1
        } else {
            l++
        }
    }

    return min
}

console.log(findMin([2, 2, 2, 0, 1])) // 0
