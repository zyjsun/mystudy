var moveZeroes = function(nums) {
    let index=0
    for(let i=0;i<nums.length;i++){
      if(nums[i]!==0){   
         nums[index++]=nums[i]; //不为零的往前挪
      }
    }
     while(index<nums.length){
         nums[index++]=0;//补全不为零的
     }
return nums
    
};


var moveZeroes2 = function(nums) {
   
   // 指针j是一直往后移动的，如果指向的值不等于0才对他进行操作。而i统计的是前面0的个数，我们可以把j-i看做另一个指针，
   // 它是指向前面第一个0的位置，然后我们让j指向的值和j-i指向的值交换
   let i=0;
   for(let j=0;j<nums.length;j++){
       if(nums[j]==0){
           i++;                  
       } else if(i!==0){
            nums[j-i]=nums[j]
            nums[j]=0
       }
   }
return nums
};


let arr=[1,2,0,5,0,0,9]
console.log(moveZeroes2(arr))