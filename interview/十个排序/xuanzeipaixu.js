// 把第一个没有排序过的元素设置为最小值
// 遍历每个没有排序过的元素
// 如果元素<现在的最小值
// 将此元素设置成新的最小值
// 将最小值和第一个没有排序过的元素交换
Array.prototype.selectSort=function(){
  
    for(let i=0;i<this.length-1;i+=1){
        let minIndex=i;
    for(let j=i;j<this.length;j+=1){
        if(this[j]<this[minIndex]){
            minIndex=j;
        }
    }
    console.log(minIndex)
    if(minIndex!==i){
    [this[i],this[minIndex]]=[this[minIndex],this[i]]}
}
}
const arr=[5,3,4,2,1]
arr.selectSort()
console.log(arr)
