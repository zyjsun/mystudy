function add(a,b){
    return a+b;
}
var addCurry=curry(add)
addCurry(1)(2)

//用途
function ajax(type,url,data){
    var xhr=new XMLHttpRequest()
    xhr.open(type,url,true)
    xhr.setRequestHeader(data)
}
//参数long余
ajax('POSt','www.baidu.com','name=wn')
ajax('POSt','www.alibaba.com','name=wn')
ajax('POSt','www.blibli.com','name=wn')

var ajaxCurry=curry(ajax)
var post=ajaxCurry('POST')
post('www.baidu.com','name=wn')

//jp $.ajax $.get $.post

var person=[{name:'龙哥'},{name:'杜班长'}]

var msg=person.map(function(item){
    return item.name;
})
console.log(msg);

var prop=curry(function(key,obj){
    return obj[key]
})

var msg2=person.map(prop('name'))