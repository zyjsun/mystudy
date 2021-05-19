var a={
    user:'王杰',
    fn: function(x,y,z){
        console.log(this.user)
        console.log(x+y+z)
    }
}
var b=a.fn
var arr=[1,2,3]
b.apply(a,[1,2,3])