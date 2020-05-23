// lodash.flowRight() 实现函数组合
const _ = require('lodash')
const {log}= console

const reverse = arr=>arr.reverse()
const first = arr=>arr[0]
const toUpper = s=>s.toUpperCase()

const f = _.flowRight(toUpper,first,reverse)
log(f(['sss','ddd','ewew']))

// function compose(...args){
//     return function(v){
//         return args.reverse().reduce(function(acc,fn){
//             return fn(acc)
//         },v)
//     }
// }

const compose = (...args)=>(v=>args.reverse().reduce((acc,fn)=>fn(acc),v))

// 调试
const trace = _.curry((msg,v)=>{
    log(`${msg}: ${v}`)
    return v
})


const m = compose(toUpper,trace('first'),first,trace('reverse'),reverse)
log(m(['sss','ddd','ewew']))