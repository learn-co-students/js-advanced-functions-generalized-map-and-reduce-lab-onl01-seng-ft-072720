// Add your functions here
function map(src, action) {
    let output = [];
    
    for (let i=0; i < src.length; i++) {
        output.push(action(src[i]))
    }

    return output;
}

function reduce(src, action, memo) {
    let total = (!!memo) ? memo : src[0]
    let index = (!!memo) ? 0 : 1

    for (let i=index; i < src.length; i++) {
        total = action(src[i], total);
    }

    return total;
}
