// const instanceOf=(A,B)=>{
//     let p=A;
//     while(p){
//     if(p===B.prototype){
//         return true
//     }
//     p=p.__proto__;
// }
// return false;
//     };
    var foo={},// a a b undefined
    F=function(){};
    Object.prototype.a='value a'
    Function.prototype.b='value b'
