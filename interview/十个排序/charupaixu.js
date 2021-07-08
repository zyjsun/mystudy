// 插入排序
// 将第一个元素标记为已经排序
// 遍历每个没有排序过的元素
//     "提取"元素x
//     i=最后排序过元素的指数到0的遍历
//         如果现在排序过的元素>提取的元素
//             将排序过的元素向右移一格
//             否则 插入提取的元素
Array.prototype.insertSort=function(){
    for(let i=1;i<this.length;i++){
        const temp=this[i];
        let j=i;
        while(j>0){
            if(this[j-1]>temp){
                this[j]=this[j-1];
            }else{
                break
            }
            j--;
        }
        this[j]=temp//插入到位置
    }
}
const arr=[5,4,3,2,1]
arr.insertSort();
console.log(arr)