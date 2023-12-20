function countAlarms(h, m, s) {
    // 초, 분에 대한 카운트 초기화
    let [mCount, hCount] = [0, 0]

    // 시간에 대한 카운트 계산
    mCount += h * 59
    hCount += h * 60

    // 결과 초기화 및 조정
    let result = 0
    mCount += m
    hCount += m
    result -= 1

    // 현재 분, 시간에 대한 각도 계산
    const curMDegree = m * 6
    const curHDegree = 30 * (h % 12) + 0.5 * m

    // 조건 확인 및 카운트 조정
    const condition1 = curMDegree <= 5.9 * s
    const condition2 = curHDegree <= (6 - 1 / 120) * s

    if (condition1) mCount += 1
    if (condition2) hCount += 1

    // 오후 12시 이상인 경우 조정
    if (h >= 12) {
        hCount -= 1
        result -= 1
    }

    // 결과 계산
    result += mCount + hCount

    return result
}

function solution(h1, m1, s1, h2, m2, s2) {
    // 시작 시간과 종료 시간에 대한 알람 횟수 계산
    let result = countAlarms(h2, m2, s2) - countAlarms(h1, m1, s1)

    // 시작 시간이 0시 0분 0초인 경우 1 추가
    if (s1 === 0 && m1 === 0) result += 1

    return result
}

// 예시: 0시 0분 0초부터 23시 59분 59초까지 알람이 울린 횟수 계산
const h1 = 0,
    m1 = 0,
    s1 = 0,
    h2 = 23,
    m2 = 59,
    s2 = 59

const result = solution(h1, m1, s1, h2, m2, s2)
console.log("알람이 울린 횟수:", result)
