// Add your functions here
function map(array, callback) {
    let result = [];
    for (let i= 0; i < array.length; i++) {
        result.push(callback(array[i]))
    }
    return result;
}

function reduce(array, callback, startingValue= 0) {
    let accumulator = startingValue ? startingValue : array[0];
    let i = startingValue ? 0 : 1;

    for (; i < array.length; i++) {
        accumulator = callback(array[i], accumulator)
    }
    return accumulator;
}