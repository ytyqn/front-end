const _ = require('lodash')

const {log}= console

const arr = ['sss',1,'last',2,'ddd',4,5,7,8,5]

log(_.first(arr))
log(_.last(arr))
log(_.toUpper(_.first(arr)))
log(_.reverse(arr))
const res=_.each(arr,(item,index)=>{
    log(item,index)
    return item+1
})

log(res)