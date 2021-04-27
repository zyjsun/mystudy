var singleNumber = function(nums) {
    let ans = 0;
    for(let i = 0; i < nums.length; i++){
        ans ^= nums[i];//异位运算
    }
    return ans;
};
// 任何数和自己做异或运算，结果为 00，即 a⊕a=0a⊕a=0 。
// 任何数和 00 做异或运算，结果还是自己，即 a⊕0=⊕a⊕0=⊕。
// 异或运算中，满足交换律和结合律，也就是 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。


let nums=[1,1,2,2,3,3,4,,5,5]
console.log(singleNumber(nums))
console.log(5^5)
console.log(5^6^6^7^7)
