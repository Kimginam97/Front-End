function sameFrequency(number1, number2) {
    const str1 = String(number1)
    const str2 = String(number2)

    const first = Array.from(str1)
    const second = Array.from(str2)

    if (first.length !== second.length) {
        return false
    }

    const frequency1 = {}
    const frequency2 = {}

    // 빈도수 값 더하기
    for (let value of first) {
        frequency1[value] = (frequency1[value] || 0) + 1
    }

    for (let value of second) {
        frequency2[value] = (frequency2[value] || 0) + 1
    }

    for (let key in frequency1) {
        // 만약 frequency2 의 key 값이 같지 않다면
        if (!(key in frequency2)) {
            return false
        }

        // 만약 frequency2[key] 값과 frequency1[key] 같지 않다면
        if (frequency2[key] !== frequency1[key]) {
            return false
        }
    }
    return true
}
