const m = {
    arr: [1,2,3,4,5],
    [Symbol.iterator]:function * (){
        for(let i of this.arr){
            yield i
        }
    }
}

const n = {
    arr: [1,2,3,4,5],
    [Symbol.iterator]:function * (){
        let index = 0
        return {
            next(){
                return {
                    value: arr[index],
                    done: index++>arr.length
                }
            }
        }
    }
}
const {log} = console

// for(let i of m){
//     log(i)
// }

for(let i of m){
    log(i)
}