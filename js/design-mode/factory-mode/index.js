const junde={
    name:'俊德',
    age:20,
    career:'coder'
}

// const yangzong={
//     name:'杨总',
//     age:19,
//     career:'manager'
// }

function User(name,age,career,work){
    this.name=name;
    this.age=age;
    this.career=career;
    this.work=work;
}

// const user=new User('xx','xx','xx')


// function Coder(name,age){
//     this.name=name
//     this.age=age
//     this.career='coder'
//     this.work=['写代码','改bug','摸鱼']
// }

// function ProductManager(name,age){
//     this.name=name
//     this.age=age
//     this.career='product manager'
//     this.work=['定会议室','写PRD','催更']
// }

function Factory(name,age,carrer){
    let work;
    switch(carrer){
        case 'coder':
            work=['写代码','改bug','摸鱼']
           
            break
        case 'product manager':
            work=['定会议室','写PRD','催更']
            break
            //...
    }

    return new User(name,age,carrer ,work)
}

//工厂模式: 就是将创建对象的过程封装，把共性与个性彻底分离