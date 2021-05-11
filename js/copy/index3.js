function foo(){
    var myName='欧文'
    let test1=1
    const test2=2
    var innerBar={
        setName:function(newName){
            myName=newName
        },
        getName: function() {
            console.log(test1);//在堆里面
            return myName
          }
    }
    return innerBar
}

var bar=foo()
bar.setName('yujia')//内部函数调用外部变量
console.log(bar.getName())