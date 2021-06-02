const mysql=require('mysql')
const { dataBase } = require('./defaultConfig')
const config=require('./defaultConfig')

//创建线程池
let pool=mysql.createPool({
    host:config.dataBase.HOST,
    user:config.dataBase.USERNAME,
    password:config.dataBase.PASSWORD,
    database:config.dataBase.DATABASE,
    port:config.dataBase.PORT,
})

//连接线程池，做sql查找
let allServices={
    query:function(sql,values){
        return new Promise((resolve,reject)=>{
            pool.getConnection(function(err,connection){
                    if(err){
                        reject(err)
                    }else{//连接成功
                        connection.query(sql,values,(err,rows)=>{//sql查找
                            if(err){
                               reject(err) 
                            }else{
                                resolve(rows) 
                            }
                            connection.release()
                        })
                    }
            })
        })
    }
}

//用户登录
let userLogin=function(username,userpwd){
    let _sql=`select * from users where username="${username}" and userpwd="${userpwd}"`
    return allServices.query(_sql)
}
//查找用户
let findUser=function(username){
    let _sql=  `select *from users where username="${username}"`;
    return allServices.query(_sql)
}
//用户注册
let insertUser=function(value){
    
    let _sql=`insert into users set username=?,userpwd=?,nickname=?`;
    return allServices.query(_sql,value)
}

//根据类型查找对应文章列表
let findNoteListByType=function(type){
    let _sql=`select * from note where note_type="${type}"`;
    return allServices.query(_sql)
}

let findNoteDetailByid=function(id){
    let _sql=`select *from note where id="${id}"`
    return allServices.query(_sql)
}

module.exports={
    userLogin,
    insertUser,
    findUser,
    findNoteListByType,
    findNoteDetailByid
}

