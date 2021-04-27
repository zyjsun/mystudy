var obj={
    name: 'aa'
}
const arr1=[]
const arr2=(new Array(7)).fill(1)
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i],i);
}
arr2.forEach((item,index)=>{
    console.log(item,index);
})
const arr3=arr2.map((item,index)=>{
      return item+1
})
// console.log(arr3)
const arr4=(new Array(7)).fill([])//赋值给指针值  引用类型被分配到堆里

const stack=[]
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.pop()
