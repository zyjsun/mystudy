//1.讲一下排序，给一个不懂快排的人讲快排，复杂度，为什么叫他快排

//思路：快速排序会将原始数组筛选成较小较大的两个子数组
//然后递归的排序两个子数组

let arr=[5,1,3,6,2,0,7]
let arr1=[1,2,3,6,4,7,8]

// function quickSort(arr){
//     if(arr.length>1){
//         let lineIndex=Math.floor(arr.length/2)//3
//         let pivot=arr.splice(lineIndex,1)[0] //6
//         let left=[];
//         let right=[];
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]<pivot){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return quickSort(left).concat([pivot], quickSort(right))
//     }else{
//         return arr
//     }
// }

function quickSort(arr,left=0,right=arr.length-1){
    if(arr.length>1){
        const lineIndex=partition(arr,left,right)
        //左边的子数组不小于一
        if(left<lineIndex-1){
            quickSort(arr,left,lineIndex-1)
        }
        //右边的子数组长度不小于一
        if(lineIndex<right){
            quickSort(arr,lineIndex,right)
        }
    }

        return arr
    

}
function partition(arr,left,right){
    let pivotValue=arr[Math.floor(left+(right-left)/2)]
    let i=left;
    let j=right;
    while(i<=j){//左右指针相遇
        while(arr[i]<pivotValue){
            i++
        }
        while(arr[j]>pivotValue){
            j--
        }
        if(i<=j){
            swap(arr,i,j)
            i++
            j--
        }
    }
    return i
}
function swap(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]]
}

console.log(quickSort(arr1))

//O(N*logN)