var rotate = function(nums, k) {
       let temp=[]//申明一个临时数组
       for(let i=0;i<nums.length;i++){
           temp[i]=nums[i]//赋值
       }
       for(let j=0;j<nums.length;j++){
           nums[(j+k)%nums.length]=temp[j]//求余
       }
       return nums
};

//反转前K个
var rotate2 = function(nums, k) {
       k%=nums.length
       reverse(nums,0,nums.length-1)//反转全部元素
       reverse(nums,0,k-1)//前面的反转
       reverse(nums,k,nums.length-1)//后面的反转
       return nums
};

function reverse(nums,start,end){
    while(start<end){
        let temp=nums[start]
        nums[start++]=nums[end]
        nums[end--]=temp
    }
    return nums
}

var rotate3 = function(nums, k) {
   let hold=nums[0]  //下一个要旋转的值
   let index=0
   const visited = (new Array(7)).fill(false)
   for(let i=0;i<nums.length;i++){
       index=(index+k)%nums.length//weizhi
       if(visited[index]){
           //如果访问过，再次访问的话，会出现原地打转的现象，
                //不能再访问当前元素了，我们直接从他的下一个元素开始
                index=(index+1)%nums.length
                hold=nums[index]
                i--
       }else{
           //把当前值保存在下一个位置，保存之前要把下一个位置的
                //值给记录下来
           visited[index]=true
           let temp=nums[index]
           nums[index]=hold
           hold=temp
       }
   }
   return nums
};
let arr=[1,2,3,4,5,6]
//console.log(rotate(arr,3))
console.log(rotate3(arr,3))

 

