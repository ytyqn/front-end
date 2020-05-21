function deepCopy(arr){
    let res = Array.isArray(arr) ? []:{}
    if(arr && typeof arr === 'object'){
        for(let key in arr){
            if(arr[key] && typeof arr[key] === 'object'){
                res[key] = deepCopy(arr[key])
            }else{
                res[key] = arr[key]
            }
        }
    }
    return res
}

const m={nm:{k:12},as:[1,2,3,54],say(){console.log('mmm')}}
const n=[{m:'KK'},2,3,4]

console.log(deepCopy(m))
console.log(deepCopy(n))
console.log(deepCopy(m).say())