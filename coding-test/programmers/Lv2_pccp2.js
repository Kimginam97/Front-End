function solution(land) {
    let maxOilSize = 0
    const oilSizeList = [0, 0]
    let oilIndex = 2
    const rows = land.length
    const cols = land[0].length

    // BFS를 통해 석유 덩어리를 찾아내고 크기를 계산
    function bfs(start, flag) {
        const queue = [start]
        const dx = [0, -1, 0, 1]
        const dy = [-1, 0, 1, 0]

        land[start[0]][start[1]] = flag
        let count = 1

        while (queue.length) {
            const [x, y] = queue.shift()

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i]
                const ny = y + dy[i]

                if (isValid(nx, ny) && land[nx][ny] === 1) {
                    land[nx][ny] = flag
                    count++
                    queue.push([nx, ny])
                }
            }
        }

        return count
    }

    // 유효한 범위인지 확인
    function isValid(x, y) {
        return x >= 0 && x < rows && y >= 0 && y < cols
    }

    // 전체 지도를 탐색하면서 석유 덩어리 찾기
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (land[i][j] === 1) {
                const count = bfs([i, j], oilIndex)
                oilSizeList[oilIndex++] = count
            }
        }
    }

    // 각 열에 대해 석유 덩어리 크기 합산하면서 최대값 갱신
    for (let j = 0; j < cols; j++) {
        const set = new Set()

        for (let i = 0; i < rows; i++) {
            set.add(land[i][j])
        }

        let sum = Array.from(set).reduce(
            (acc, cur) => acc + oilSizeList[cur],
            0
        )
        maxOilSize = Math.max(maxOilSize, sum)
    }

    return maxOilSize
}

// 예시 이차원 배열
const exampleLand = [
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
]

// 함수 호출 및 결과 출력
const result = solution(exampleLand)
console.log(result)
