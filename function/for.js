const arr = new Array(1,2,3,4,5,6,7,7,8,899,7)

arr.forEach(i=>console.log(i))
arr.map(i=>console.log(i))

for(let i=arr.length;i;i--){
    console.log(arr[i])
}

for(let i in arr){
    console.log(arr[i])
}

for(let i of arr){
    console.log(i)
}