function likes(names){
     var templates=[
         'no one likes this',
         '{name} likes this',//占位符
         '{name} and {name}like this',//Jack Rose
         '{name},{name} and {name} like this',
         '{name},{name} and {n} others like this'
     ]
     var idx=Math.min(names.length,4);//
    //  /{name}/
     return templates[idx].replace(/{name}|{n}/g,function(val){//正则表达式匹配到有 {name} 或{n} 代替
         //console.log(val)
         return val==='{name}'?names.shift():names.length;//删除并返回数组第一个元素
         //return '''''
     })
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob","Alex"]));
console.log(likes(["Max","John","Mark"]));
console.log(likes(["Alex","Jacob","Mark","Max"]));