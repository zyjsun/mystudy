let c:number=2;

//typescript js 超群，写java一样写js
// const zz={
//     name:"zzzz",
//     age:18
// }
// const ly= {
//     name:'sss',
//     age:20
// }
//参数需要满足 name age 接口
interface IUser{
    name:String;
    age:number;
    hometown:string;
}
const yxy={
    name:'yxy',
    age:17,
    hometown:'yc'
}
const getUserInfo=(user:IUser)=>{ 
     //return 'name is: ${user.name},年纪是${user.age}';//user有要求，name,age属性 c++ java 静态强类型
}
getUserInfo(yxy);
//console.log('name is: ${zz.name},年纪是${zz.age}')  
//console.log(getUserInfo(zz));