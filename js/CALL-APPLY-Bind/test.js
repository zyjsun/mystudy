var a={
    user:'王杰',
    // fn:function(){
    //     console.log(this.user)
    // }
    // fn:(function(){
    //  console.log(this.user)
    // })()//报错
    fn: function(x,y,z){
        console.log(this.user)
        console.log(x+y+z)
    }
}
var b=a.fn
b.call(a,1,2,3)// this指向call中的对象a
// 相当于 function b(){
//   console.log(this.user)
// }