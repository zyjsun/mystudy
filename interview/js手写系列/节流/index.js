//节流：在规定时间内只触发一次

// function throttle(fun, delay) {
//     let last, deferTimer
//     return function (args) {
//         let that = this
//         let _args = arguments
//         let now = +new Date()
// console.log(now);
//         if (last && now < last + delay) {
//             clearTimeout(deferTimer)
//             deferTimer = setTimeout(function () {
//                 last = now
//                 fun.apply(that, _args)
//             }, delay)
//         }else {
//             last = now
//             fun.apply(that,_args)
//         }
//     }
// }

//节流
function throttle(fn,delay){
    let prev=Date.now()
    return function(){
        let context=this
        let arg=arguments
        let now=Date.now()
        if(now-prev>=delay){
            fn.apply(context,arg)
            fn()
            prev=now
        }
    }
}
