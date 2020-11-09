// Add your functions here
function map(arr, func) {
    let result = []
    for(let ar of arr) {
        result.push(func(ar))
    }
    return result
}

function reduce(arr, call, sp) {
    let result;
    if (!sp) {
        result = arr[0];
        for(let i=1; i<arr.length; i++) {
        result = call(arr[i], result)
        }    
    } else 
    {
        result = sp;
        for(let i of arr) {
            result = call(i, result)
        }
    }
   
    
    return result
  }
