// Add your functions here
const map = function(array, cb){
    let r = []
    for (let i = 0; i < array.length; i++ ) {
        r.push(cb(array[i]))
      }
    return r
}

const reduce = function(array, cb, start){
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for (;i< array.length; i++){
        r = cb(array[i], r)
    }
    return r
}