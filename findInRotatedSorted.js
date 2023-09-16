var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    // no pivot
    if (nums[r] > nums[l]) {
        return simpleSearch(nums, target)
        // there is a pivot
    } else {
        return withPivot(nums, target)
    }
}

function simpleSearch(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[mid] < target) {
            l = mid + 1
        }

        if (nums[mid] > target) {
            r = mid - 1
        }
    }

    return -1
}

function withPivot(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[r] === target) {
            return r
        }
        if (nums[l] === target) {
            return l
        }

        if (nums[mid] > nums[r]) {
            if (target > nums[mid]) {
                l = mid + 1
            } else {
                if (target > nums[l]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        } else {
            if (target > nums[mid]) {
                if (target > nums[r]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            } else {
                r = mid - 1
            }
        }
    }

    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 1
// console.log(search([5, 6, 7, 8, 9, 1, 2, 3, 4], 7)) // 2
// console.log(search([3, 1], 1))
