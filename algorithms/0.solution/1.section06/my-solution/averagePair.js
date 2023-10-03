function averagePair(arr, avg) {
    // arg 값 없을 경우
    if (arr.length === 0) false

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === avg * 2) {
            return true
        } else if (sum > avg * 2) {
            right--
        } else {
            left++
        }
    }
    return false
}
averagePair([1, 2, 3], 2.5) // true
