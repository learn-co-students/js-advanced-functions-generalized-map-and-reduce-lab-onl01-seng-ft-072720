// Add your functions here

function map(array, cb) {
    let r = []
  
    for (let i = 0; i < array.length; i++) {
      let theElement = array[i]
      r.push(cb(theElement))
    }
  
    return r;
  }
  
  function reduce(array, cb, start){
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < array.length; i++) {
      r = cb(array[i], r)
    }
  
    return r;
  }
