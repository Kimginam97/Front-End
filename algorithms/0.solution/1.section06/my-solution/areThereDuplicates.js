function areThereDuplicates(...arg) {
    if (arg.length === 0) false

    let frequency = {}

    for (let val of arg) {
        frequency[val] = (frequency[val] || 0) + 1
    }

    for (let key in frequency) {
        if (1 < frequency[key]) {
            return true
        }
    }

    return false
}
