const str = 'ahdfaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmaabbaliuummmmmmmmuuunfjjdhhdjjlaimmnnmn';
let temp=''
for(let i=2;i<parseInt(str.length/2);i++){
    temp= '(\\w)'.repeat(i)
    for (let m = i; m > 0; m--) {
        temp += '\\' + m;
    }
    // console.log(temp)
    const exp = new RegExp(temp,'g');
// const exp = /(\w)(\w)(\w)\3\2\1/gi;
const newarr = str.match(exp);
// console.log(arr)
if(!newarr){console.log(arr);break;}else{arr=newarr}


temp=''
}
