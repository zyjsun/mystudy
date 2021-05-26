//循环遍历数组，每次都找出当前范围内最小值
//把它放在当前范围头部，然后缩小排序范围，
//继续重复以上操作，直到数组有序
arr=[5,3,2,4,1]
function selectSort(arr){
    let len=arr.length;
    let minIndex;
   
    for(let i=0;i<len-1;i++){//移动左指针
        minIndex=i;

        for(let j=i;j<len;j++){
            if(arr[j]<arr[minIndex]){//找范围内最小值
                minIndex=j
            }
        }
    if(minIndex!==i){
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    }
 return arr
}

console.log(selectSort(arr))