var intersect = function(nums1, nums2) {
      let arr1=nums1.sort((a,b)=>a-b)
      let arr2=nums2.sort((a,b)=>a-b)//按数值大小来排序
      console.log(arr1)
      console.log(arr2)
      let arr3=[]
      let i=0
      let j=0
    while(i<arr1.length&&j<arr2.length){
             if(arr1[i]==arr2[j]){
                 arr3.push(arr1[i])
                 i++
                 j++
             }else{
                if(arr1[i]<arr2[j])
                {
                    i++
                }else{
                    j++
                }
             }
    }
    return arr3
};
var intersect2 = function(nums1, nums2) {
    let hash = new Map()//建立哈希表
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        if(hash.has(nums1[i])) {
            hash.set(nums1[i], hash.get(nums1[i]) + 1)//存值并记录每一项出现的次数，键值加一
        } else {
           hash.set(nums1[i], 1) 
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        let temp = nums2[i]
        let hashKey = hash.get(temp)
        if(hash.has(temp)) {//有就删除value-1,为零时从map中去除
            res.push(temp)
            if(hashKey > 1) {
                hash.set(temp, hashKey - 1)
            } else {
                hash.delete(temp)
            }
        }
    }
    
    return res
};
let arr1=[1,2,1,3,4,77,34]
let arr2=[1,3,1,5,4,6,6,34,77]
// console.log(arr1.sort())
console.log(intersect2(arr1,arr2))