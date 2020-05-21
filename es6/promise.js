function all(arr){
    let index=0, res=[]
    return new Promise((reslove,reject)=>{
        next()
        function next(){
            arr[index].then(v=>{
                res.push(v)
                index++
                if(index === arr.length){
                    reslove(res)
                }else{
                    next()
                }
            })
        }
    })
}

all([Promise.resolve(100),Promise.resolve(200),Promise.resolve(300),Promise.resolve(400)]).then(console.log)