function sub_curry(fn) {
    var args = [].slice.call(arguments, 1)
    return function() {
      var newArgs = args.concat([].slice.call(arguments))
      return fn.call(this, ...newArgs)
    }
  }
  
  function curry(fn, length) {
    var slice = Array.prototype.slice
    length = length || fn.length
  
    return function() {
      if (arguments.length < length) {
        var combined = [fn].concat(slice.call(arguments))  // [test, 1, 2, 3]
        return curry(sub_curry.apply(this, combined), length - arguments.length)
      } else {
        return fn.apply(this, arguments)
      }
    }
  }

var test=curry(function(a,b,c){
    return [a,b,c]
})
test(1,2,3)
test(1)(2,3)
test(1)(2)(3)