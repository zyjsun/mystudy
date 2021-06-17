//实现一个flat函数
let arr=[1,2,[3,4],[[1,2,3],4,5],8]
function flat(arr,num){//数组的递归
//     1.解构
//     while(arr.some(Array.isArray)){
//         arr=[].concat(...arr)
//     }
//2.转换成字符串
    // let str=JSON.stringify(arr)
    // arr=str.replace()
    // return arr

    // 3.reduce 
    return num>0?arr.reduce((pre,cur)=>{
       return pre.concat(Array.isArray(cur)?flat(cur,num-1):cur)//concat优先级没
    },[]):arr.slice()//pre第一次的值
}

console.log(flat(arr,1))