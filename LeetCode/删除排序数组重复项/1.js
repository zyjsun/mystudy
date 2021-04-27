var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let left=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]!==nums[left]){
            nums[++left]=nums[right]
        }
    }
    return left+1
};
let nums=[1,1,2,2,4,5,6,6]
let length=removeDuplicates(nums)
for(let i=0;i<length;i++){
   console.log(i,nums[i])}
   

