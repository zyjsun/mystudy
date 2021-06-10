//状态机
// function loadUI(){
//   showloadingScreen()
//   yield loadUIDataAsynchronously()
//   hideLoadingScreen()
// }

// var loader=loadUI()//返回一个遍历器
// //加载UI
// loader.next()
// loader.next()

// function *main(){
//     var result=yield request('http://some.url')
//     var resp=JSON.parse(result)
//     console.log(resp.value)
// }

// function result(){
//     makeAjaxCall(url,function(res){
//         it.next(res)
//     })
// }

// var it=main()

// function* numbers(){
//     let file =new FileReader('numbers.txt')

//     try{
//         while(!file.eof){
//             yield parseInt(file.readLine(),10)
//         }

//     }finally{
//             file.close()
//     }
// }

//控制流管理

// new Promise((resolve,reject)=>{
//     step1(function(value1) {
//         resolve(value1)
//     })
// }).then((resolve,reject)=>{
//     step1(function(value2) {
//         resolve(value2)
//     })})

// Promise.resolve(step1)
// .then(step2)
// .then(step3)
// .then(step4)


function *lobgRunningTask(value1){
        try{
            var value2=yield step1(value1)
            var value3=yield step1(value2)
            var value4=yield step1(value3)
            var value5=yield step1(value4)
        }catch(error){

        }
}

scheduler(lobgRunningTask(initValue))

function scheduler(task){//task为对象 同步的
    var taskobj=task.next(task.value)
    if(!taskobj.done){
        task.value=taskobj.value;
        // task.next(task.value)
        scheduler(task)
    }

}