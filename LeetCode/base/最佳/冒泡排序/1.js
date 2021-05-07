let arr=[9,8,7,6,5,4,3,2,1]
const maopao=arr=>{

    
for(let i=0;i<arr.length-1;i++){
    var flag=false;//提前退出冒泡循环的标志
    for(let j=0;j<arr.length-i-1;j++)
    {
           if(arr[j]<arr[j+1])
        {   
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            flag=true//表示数据是否交换
        }
        if(!flag){
            break;
        }
    }
}
return arr
}
console.log(maopao(arr))