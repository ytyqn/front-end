function once(fn){
    let done = false
    return function(){
        if(!done){
            done = true
            return fn.apply(this,arguments)
        }
    }
}

const pay = once(function(money){
    console.log(`pay: ${money}`)
})

pay(13)
pay(12)
pay(15)
pay(17)