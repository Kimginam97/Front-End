function validAnagram(arr1, arr2) {
    // 문자열 길이가 같지 않을때
    if (arr1.length !== arr2.length) false

    // 빈도수 객체 생성
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // 빈도수 증가
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // 빈도수 비교
    // 만약 빈도수가 같지 않을 경우 false
    // key 값이 포함되지 않을 경우
    for (let key in frequencyCounter1) {
        if (frequencyCounter2[key] !== frequencyCounter1[key]) return false

        if (!(key in frequencyCounter2)) return false
    }
    return true
}
