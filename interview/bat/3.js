//分别实现一个浅拷贝 和 深拷贝
function shallowClone(obj) {
    var dst = {};
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)){
            dst[prop] = obj[prop]
        }
    }
    return dst
}

    function deepClone(obj){//相互引用用不了
        if(typeof obj==='object'){
            var result=obj.constructor===Array?[]:{}
            for(var i in object){
                result[i]= typeof obj[i] ==='object'?deepClone(obj[i]):obj[i]
            }
        }else{
            var result=obj
        }
        return result
    }

    let obj1 = {
        name: 'yang',
        res: {
            value: 123
        }
    }
    

    // var nObj = Object.assign({},obj,obj1);
    //花括号叫目标对象，后面的obj、obj1是源对象。对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的

    let obj2 = Object.assign({}, obj1)
    obj2.res.value = 456
    console.log(obj2) // {name: "yang", res: {value: 456}}
    console.log(obj1) // {name: "yang", res: {value: 456}}
    obj2.name = 'haha'
    console.log(obj2) // {name: "haha", res: {value: 456}}
    console.log(obj1) // {name: "yang", res: {value: 456}}
    
  