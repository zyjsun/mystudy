var plusOne = function (digits) {
    for(let i=digits.length-1;i>=0;i--){
        digits[i]=digits[i]+1
        digits[i]=digits[i]%10//只判断个位数
        
        if(digits[i]!==0){
            return digits
        }
    }
    digits.unshift(1)//往前加一
    return digits
};

let arr=[9,9,9]
console.log(plusOne(arr))