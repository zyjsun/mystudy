temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
//每日温度
var dailyTemperatures = function(T) {
   const len=T.length
   const stack=[]
   const res=new Array(len).fill(0)
    //打破递减关系 记录下标
   for(let i=0;i<len;i++){
       while(stack.length&&T[i]>T[stack[stack.length-1]]){
        const top=stack.pop();//栈顶元素
        res[top]=i-top;//规避了无意义的操作
       }
        stack.push(i)
   }

   return res;
}

