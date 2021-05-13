const nums=[1,3,6,15,4,7,10]


var rob=function (nums){
    if(nums.length==0){
        return 0;
    }
    const dp=[0,nums[0]]
    for(let i=2;i<=nums.length;i++){
        dp[i]=Math.max(dp[i-2]+nums[i-1],dp[i-1])
        //从前i个房子进行判断，金额的最大值,nums当前房屋里的金额数量
    }
    console.log(dp)
    return dp[nums.length]

}
console.log(rob(nums))