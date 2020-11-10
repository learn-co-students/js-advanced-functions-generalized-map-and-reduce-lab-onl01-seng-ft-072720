// Add your functions here

//map
const map = function(array, callback){
    const newArray = []
    for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i]))
}
    return newArray
};

//reduce
const reduce = function(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
    for (; i < src.length; i++){
        r = cb(src[i], r)
    }
    return r;
};