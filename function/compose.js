// 函数组合
function compose(f,g){
    return function(v){
        return f(g(v))
    }
}

function reverse(arr){
    return arr.reverse()
}

function first(arr){
    return arr[0]
}

const last = compose(first, reverse)
const {log} = console

log(last([1,2,3,4]))