// const data=new Date()
// var years=data.getFullYear()
// var mounth=data.getUTCMonth()
// var day=data.getUTCDay()
// var minute=data.getMinutes()
// var scends=data.getSeconds()
const reg=/(\d{4})-(\d{2})-(\d{2})/;///四位数的数组4,2,2
const str='11abc111def';
const reg2=/[a-z]{3}$/
const date='2019-01-02'
let arr=date.split('-')
console.log(arr)
console.log(reg2.exec(str))
// for(let i=0;i<arr.lengt;i++){
//     let year=arr[i]
// }