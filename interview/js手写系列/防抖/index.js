//防抖：在规定时间内没有触发第二次，则执行

function debounce(fn,delay){
    let timer=null
    //闭包 只执行一次
    return function(){//
        clearTimeout(timer)
        let context=this
        let arg=arguments
        timer=setTimeout(function(){
                fn.apply(context,[...arg])
            },delay)
            console.log(timer)//点击次数
        }
}