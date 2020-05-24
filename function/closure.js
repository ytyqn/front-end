// 闭包
function makePower(m){
    return function(n){
        return Math.pow(n,m)
    }
}

const {log} = console

const pow2 = makePower(2)
const pow3 = makePower(3)

log(pow2(2))
log(pow3(2))