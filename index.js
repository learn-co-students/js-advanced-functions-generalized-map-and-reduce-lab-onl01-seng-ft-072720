// Add your functions here
function map(src, change){
    let array = []
    for(let i = 0; i < src.length; i++){
        let specialElement = src[i]
        array.push(change(specialElement))
    }
    return array
};
function reduce(src, change, start){
    let rest = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1
    for(; i < src.length; i++){
        rest = change(src[i], rest)
    }
    return rest
}