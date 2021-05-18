// function bar(){
//     console.log(myName,this);//11
// }
// //Outer 外部变量 先找执行上下文
// function foo(){
//    var myName='22'
//    bar()//指向全局
//    console.log(myName)
// }
// var myName='11'//变量环境Out指向，全局执行
// foo()


// function bar() {
//     var myName = '潭子'
//     let test1 = 100
//     if (1) {
//       let myName = '浩楠'
//       console.log(test);
//     }
//   }
  
//   function foo() {
//     var myName = '永涛'
//     let test = 2
//     {
//       let test = 3
//       bar()
//     }
//   }
  
//   var myName = '子贤'
//   let myAge = 10
//   let test = 1
//   foo()

function foo(){
    var myName='杨总'
    let test1=1
    let test2=2
    var innerBar={
        getName:function(){
            console.log(test1);
            return myName
        },
        setName:function(newName){
            myName=newName
        }
    }
    return innerBar
}

function test(){
    var a=foo()
    a.getName()
}

var bar=foo()
// bar.setName('景峰')
// bar.getName()  不调用就不形成闭包
