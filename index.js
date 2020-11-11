function map(sourceArray, callb) {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        arr.push(callb(element))
    }
    return arr;
}

//need to understand this
function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }
