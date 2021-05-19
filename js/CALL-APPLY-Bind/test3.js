var a={
    user:'王杰',
    fn: function(x,y,z){
        console.log(this.user)
        console.log(x+y+z)
    }
}
var b=a.fn
// var arr=[1,2,3]
var c=b.bind(a)(1,2,3)//函数类型
// c(1,2,3)