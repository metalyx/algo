var maxConsecutiveAnswers = function (answerKey, k) {
    let left = 0
    let pointer = -1
    let length = 0
    let max = 0

    let map = {
        T: 0,
        F: 0,
    }

    // O(n)
    while (pointer < answerKey.length) {
        if (formula(length, k, map)) {
            max = max < length ? length : max
            pointer++
            length += 1
            map[answerKey[pointer]] += 1
        } else {
            map[answerKey[left]] -= 1
            left++
            length -= 1
        }
    }

    console.log(max)
    return max
}

// O(1)
function formula(length, k, map) {
    function maxCount() {
        if (map.T > map.F) {
            return map.T
        }

        return map.F
    }

    if (length - maxCount() <= k) {
        return true
    }

    return false
}

maxConsecutiveAnswers('TFTFTF', 2)
