let num=1,
    f=1.0;
//冯诺依曼
    // console.log(typeof num,typeof f);
    // console.log(0.1+0.2);
    let name= '张三zzz';
    console.log(typeof name ,name.length);//面向对象的写法 
    //姓与名   
    //姓一定是，两个字的姓，忽略 枚举
    //除了姓之外都是名
    let firstname=name[0];
    //优先级
    let lastname=name.substring(1);//substring(i,j)起始i到j-1的子串
    console.log(lastname);
    console.log(1+lastname);//拼接字符串
    console.log(1+true);
    let gf=null;//声明了但没有值
    console.log(typeof gf);//undefined;object
    // JS typeof 是有点错位的， 精神大条 一周设计
    //未定义类型 undefine
    let xiaomei={
        name:"小美",
        sex:"women",
        age:18,
        hometown:'抚州'
    }
    console.log(xiaomei);
    let arr=[1,2,3];
    console.log(typeof arr);//typeof碰到null没办法

    let func=()=>{}
    console.log(typeof func)//the bad parts

  //除了基本数据类型，只有对象

  let b=1.01;
  //貌似对象?
  //   
  console.log(b.toFixed(1))
  b=2.1;
  console.log(b);
  //对象当然是对象 一切皆是对象 ，JSON oBJECT对象， 是对象的一种
  const obj={
      name:'王杰',
      isSingle:true
  }
  obj.isSingle=false;//不可变的时候变了
  console.log(obj);