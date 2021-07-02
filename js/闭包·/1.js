function test(){
    var arr=[]
    for(var i=0;i<10;i++){
        (function(j){
            arr[j]=function(){
                console.log(j)
            }
        })(i)//自执行函数
    }
    return arr
    
}
var myArr=test()

    for (var j = 0; j < 10; j++) {
        myArr[j]()
      }
