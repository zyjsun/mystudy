// 合并二维有序数组成一维有序数组，归并排序的思路
function mergeSort(arr) {
    const len = arr.length
    // 处理边界情况
    if(len <= 1) {
        return arr[0]
    }   
    // 计算分割点
    const mid = Math.floor(len / 2)    
    // 递归分割左子数组，然后合并为有序数组
    const leftArr = mergeSort(arr.slice(0, mid)) 
    // 递归分割右子数组，然后合并为有序数组
    const rightArr = mergeSort(arr.slice(mid,len))  
    // 合并左右两个有序数组
    arr = mergeArr(leftArr, rightArr)  
    // 返回合并后的结果
    return arr
}
function mergeArr(arr1, arr2) {  
    // 初始化两个指针，分别指向 arr1 和 arr2
    let i = 0, j = 0   
    // 初始化结果数组
    const res = []    
    // 缓存arr1的长度
    const len1 = arr1.length  
    // 缓存arr2的长度
    const len2 = arr2.length  
    // 合并两个子数组
    while(i < len1 && j < len2) {
        if(arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if(i<len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}

var arr=[[1,2,4],[2,3,7],[3,5,7],[4,5,8],[1,2,3]]
console.log(mergeSort(arr))

/**
 * 解题思路：
 * 双指针 从头到尾比较 两个数组的第一个值，根据值的大小依次插入到新的数组中
 * 空间复杂度：O(m + n)
 * 时间复杂度：O(m + n)
 */

//  function　merge(arr1, arr2){
//     var　result=[];
//     while(arr1.length>0 && arr2.length>0){
//         if(arr1[0]<arr2[0]){
//               /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
//             result.push(arr1.shift());
//         }else{
//             result.push(arr2.shift());
//         }
//     }
//     return　result.concat(arr1).concat(arr2);
// }

// function mergeSort(arr){
//     let lengthArr = arr.length;
//     if(lengthArr === 0){
//      return [];
//     }
//     while(arr.length > 1){
//      let arrayItem1 = arr.shift();
//      let arrayItem2 = arr.shift();
//      let mergeArr = merge(arrayItem1, arrayItem2);
//      arr.push(mergeArr);
//     }
//     return arr[0];
// }
// let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
// let arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
// mergeSort(arr1);
// mergeSort(arr2);