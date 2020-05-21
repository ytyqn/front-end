const _ = require('lodash')

const {log}= console

function getArea(r){
    log(r)
    return Math.PI*r*r
}

let getAreaWithMemory = _.memoize(getArea)
// 缓存，只会执行一次log(r)
log(getAreaWithMemory(4))
log(getAreaWithMemory(4))
log(getAreaWithMemory(4))

// 模拟memize

function memoize(f){
    return function(){ }
}