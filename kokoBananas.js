/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let min = 1
    let max = Math.max(...piles)

    let result = max

    while (min <= max) {
        let k = Math.floor((min + max) / 2)

        let hours = getHours(k, piles)

        if (hours <= h) {
            result = Math.min(result, k)
            max = k - 1
        } else {
            min = k + 1
        }
    }

    return result
}

function getHours(k, piles) {
    let hours = 0

    for (let i = 0; i < piles.length; i++) {
        let current = piles[i]

        hours += Math.ceil(current / k)
    }

    return hours
}
// 5
console.log(minEatingSpeed([312884470], 312884469))
