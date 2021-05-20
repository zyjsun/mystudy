var a={
    name:'zyj'
}

Function.prototype.myapply=function(context){
    if(typeof this!=='function'){
          throw new Error('not function');
    }
  
    context=context||window
    context.fn=this //this为test
    context.fn()//a把test函数执行掉了
    let [arr]=[...arguments].slice(1)//解构出来 数组取出赋值
    let resArr=[...arr]
    let result
    result=context.fn(...resArr)
  //   console.log(arguments)  传来的参数
   delete context.fn
   return result
}

function test(x,y,z){
console.log(this.name)
console.log(x,y,z);
}

test.myapply(a,[1,2,3])//让test的this到a去