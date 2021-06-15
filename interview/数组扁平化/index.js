let ary=[1,2,[3,[4,5]],6]//多维数组换成一维数组


// const [arr]=[...ary]
// console.log(arr)
//1

while(ary.some(Array.isArray)){//判断是不是数组
    ary=[].concat(...ary) //1,2,[3,[4,5]],6 先解构后运算，数组中有数组会进行一次解构
    console.log(ary)
}

//2

