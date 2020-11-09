// Add your functions here
function map(arr, fn) {
    let newArr = []
    for (const x of arr) { newArr.push(fn(x)) }
    return newArr
}

function reduce(arr, fn, start) {
    let result = start || arr[0]
    !!start ? null : arr.shift()
    for (const x of arr){ result = fn(x, result)}
    return result
}