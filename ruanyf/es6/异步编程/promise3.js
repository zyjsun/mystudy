// function executor(resolve, reject) {
//     console.log(1)
//     resolve(100)
//   }
  
//   let demo= new Promise(executor)
  
//   function onResolve(value) {
//     console.log(value);
//   }
  
//   demo.then(onResolve)
//   console.log(2)

function Bromise(executor){
    let onResolve_=null
    let onReject_=null

    this.then=function(onResolve,onReject){
        onResolve_=onResolve
    }

    function resolve(value){
        onResolve_(value)
    }
    executor(resolve,null)
}