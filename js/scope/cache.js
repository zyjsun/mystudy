function test(){
    var food='apple'
    function a(){
        food='banana'
    }
    function b(){
        console.log(food);}

a()
b()    
}
test()