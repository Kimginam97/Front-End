function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()]
    }
    let res = capitalizeWords(array.slice(0, -1))
    console.log(res)

    res.push(array.slice(array.length - 1)[0].toUpperCase())
    console.log(array.slice(array.length - 1))
    console.log(array.slice(array.length - 1)[0].toUpperCase())
    return res
}

capitalizeWords(["a", "p", "p", "l", "e"])
