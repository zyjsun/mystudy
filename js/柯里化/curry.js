var curry=function(fn){
    //add函数的所有参数全部拿到
    // let [arr]=[...arguments].slice(1)
    var args=[].slice.call(arguments,1)

    return function(){
        // console.log(arguments)
        // var arg=[...arguments]
        var newArgs=args.concat([].slice.call(arguments))
    // return  fn(...args,...arg)
    return fn(...newArgs)
    }
}
function add(a,b){
    return a+b
}

var addCurry=curry(add)
console.log(addCurry(1,2))