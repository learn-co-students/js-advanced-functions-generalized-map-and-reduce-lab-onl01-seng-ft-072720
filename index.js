// Add your functions here
function map(array, callbackFunction) {
    let newArray = []

    for (const item of array) {
        newArray.push(callbackFunction(item))
    }

    return newArray;
}

function reduce(array, callbackFunction, startingPoint) {
    let startAmount = (!!startingPoint) ? startingPoint : array[0]
    let i = (!!startingPoint) ? 0 : 1
        
    for (; i < array.length; i++) {
        startAmount = callbackFunction(array[i], startAmount)
    }
    return startAmount;
}