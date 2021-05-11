function getJson(){
    return promise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
         console.log('2')
         resolve(2)
         return 'Json'},2000)
    })
}



// function getJson1(){
//          setTimeout(()=>{
//          console.log('json')
//          return 'Json'},200)
// }

// function show(){
//   console.log('渲染页面')
// }

async function test(){
//为then  在异步函数前面加上await,函数执行就会等待await声明的
                 //异步函数执行完毕后，在往下执行
    //console.log(3);
    try{
        await getJson()//await 会让后续的下一行代码去到下一次时间循环的微任务队列
    }catch(error){
      console.log(error)
    }
}

/* 事件循环机制 */
// console.log(1);

// setTimeout(() => {
//   var a = 2
//   console.log(a);
//   fn()
// }, 1000)

// function fn() {
//   setTimeout(() => {
//     console.log(3);
//   }, 2000)
// }
// console.log(4);

test()
// getJson().then(show)

