exports.randomRange = randomRange = (a, b)=>{
    var dis = Math.floor(Math.random()*(b-a+1))
    return a + dis
}
exports.toFix = toFix = (length, num)=>{
    var _num = num.toString().trim()
    while (_num.length < length)
        _num = "0" + _num
    return _num        
}
exports.toFixedRange = toFixedRange = (l, a, b)=>{
    return toFix(l, randomRange(a, b))
}