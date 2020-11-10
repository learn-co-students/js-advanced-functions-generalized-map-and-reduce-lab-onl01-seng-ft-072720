// Add your functions here
function map(obj, cb) {
    let array = []
    for (let key in obj) {
        array.push(cb(obj[key]))
    }
    return array
}

function reduce(obj, cb, startingPoint) {
    const keys = Object.keys(obj)
    let i = 1

    if (startingPoint) {
        i = 0
    } else {
        startingPoint = obj[keys[0]]
    }
    for (i; i < keys.length; i++) {
        startingPoint = cb(startingPoint, obj[keys[i]])
    }
    return startingPoint
}