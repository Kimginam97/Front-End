function isSubsequence(str1, str2) {
    let frequecy1 = {}
    let frequecy2 = {}

    for (let val of str1) {
        frequecy1[val] = (frequecy1[val] || 0) + 1
    }

    for (let val of str2) {
        frequecy2[val] = (frequecy2[val] || 0) + 1
    }

    for (let key in frequecy1) {
        frequecy1[key] = (frequecy2[key] || 0) + 1
    }

    for (let key in frequecy1) {
        let result = frequecy1[key] < 2 ? false : true

        return result
    }
}
