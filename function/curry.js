// 柯里化
const _ = require('lodash')
const {log}= console

function getSum(a,b,c){
    return a+b+c
}

// const curried = _.curry(getSum)

// log(curried(1,2,3))
// log(curried(1)(2,3))
// log(curried(1,2)(3))

// 模拟curry
function curry(fnuc){
 return function curried(...args){
     if(args.length<fnuc.length){
         return function(){
             return curried(...args.concat(Array.from(arguments)))
         }
     }
     return fnuc(...args)
 }
}

const curried = curry(getSum)

log(curried(1,2,3))
log(curried(1)(2,3))
log(curried(1,2)(3))
