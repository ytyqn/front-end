const arr = [1,2,3,4,5,7,9]
const {log} = console

function forEach(arr,fn){
    for(let i of arr){
        fn(i)
    }
}

// forEach(arr,item=>{
//     log(item)
// })

function filter(arr,fn){
    let res=[]
    for(let i of arr){
        if(fn(i)){
            res.push(i)
        }
    }
    return res
}

// const res= filter(arr, item=>{
//     return item>5
// })
// log(res)

const map = (arr,fn)=>{
    let res=[]
    for(let i of arr){
        res.push(fn(i))
    }
    return res
}

// const n = map(arr,item=>{
//     return item*item
// })
// log(n)

const every = (arr,fn)=>{
    let res = true
    for(let i of arr){
        res=fn(i)
        if(!res){break}
    }
    return res
}

// const e = every(arr,item=>{
//     return item>5 // item <10
// })
// log(e)

const some = (arr, fn)=>{
    let res=false
    for(let i of arr){
        res = fn(i)
        if(res){
            break
        }
    }
    return res
}
const s = some(arr,item=>{
    return item>5 // item <10
})
log(s)  