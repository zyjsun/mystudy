function sub_curry(fn) {
    return function() {
      return fn()
    }
  }
  
  function curry(fn, length) {
    length = length || 4
    return function() {
      if (length > 1) {
        return curry(sub_curry(fn), --length)
      } else {
        return fn()
      }
    }
  }
  
  var fn0 = function() {
    console.log(1);
  }
  var fn1 = curry(fn0)
  fn1()()()
  
  // fn1()   
  // curry(sub_curry(fn0))   
  // curry(function() {  
  //   return fn0() 
  // })
  
  // fn1()()  curry(sub_curry(fn0))()
  
  // curry(sub_curry(function() {
  //   return fn0()
  // })) 
  // curry(function() {
  //   return (function() {
  //     return fn0()
  //   })()
  // })
  // curry(function() {
  //   return fn0()
  // })
  
  // fn1()()()
  // curry(function() {
  //   return fn0()
  // })
  
  var fn0 = function(a, b, c, d) {
    return [a, b, c, d]
  }
  var fn1 = curry(fn0)
  fn1(1, 2)(3)(4) 
  
  // fn1(1, 2)    // curry(fn0)(1, 2)   // curry(sub_curry(fn0, 1, 2))
  // curry(function(...) {
  //   return fn0(...)
  // })
  
  // fn1(1, 2)(3)
  // curry(sub_curry(function(...) {
  //   return fn0(...)
  // }), 3)
  
  // fn1(1, 2)(3)(4) 
  // curry(sub_curry(function(...) {
  //   return fn0(1, 2, 3 ...)
  // }), 4)
  