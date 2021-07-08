// 分：把数组劈成两半，在递归对子数组进行“分”操作，直到分成一个个单个的数
// 合：把数组合并成有序数组，在对有序数组进行合并，直到全部子数组合并为一个完整数组
// 新建一个空数组res,用于存放最终排序后的数组
// 比较两个有序数组头部，较小者出队并推入res中
// 如果两个数组还有值，重复第二步
// 步骤
// 将数组元素拆分成每项只有一个元素
// 左侧i开始指数 到 右侧最后项指数 的遍历（两端包括）
// 如果左侧首值<=右侧首值
// 拷贝左侧首项的值
// 否则拷贝右侧部分首值
// 将元素拷贝到原来数组中
Array.prototype.mergeSort=function(){
    const arr=[]
    const rec=(arr)=>{
        if(arr.length===1){return arr}
        const mid=Math.floor(arr.length/2)
        const left=arr.slice(0,mid)
        const right=arr.slice(mid,arr.length)
        const orderLeft=rec(left)
        const orderRight=rec(right)
        const res=[]
        while(orderLeft.length||orderRight.length){
            if(orderRight.length&&orderLeft.length){
                res.push(orderLeft[0]<orderRight[0]?orderLeft.shift():orderRight.shift)
            }else if(orderLeft.length){
                res.push(orderLeft.shift)
            }else if(orderRight.length){
                res.push(orderRight.shift)
            }
        }
        console.log(res)
        return res;
    }
    return rec
    // const res=rec(this)
    // res.forEach((n,i)=>{
    //     this[i]=n
    // });
};
const arr=[5,3,4,2,1]
console.log(arr.mergeSort())
