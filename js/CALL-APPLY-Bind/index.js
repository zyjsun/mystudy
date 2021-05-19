let userInfo={
    name:"longge",
    age:18,
    sex:'boy',
    updateInfo:function(){
        // let that=this  updateinfo中的this
        setTimeout(()=>{
            this.name='杜班长'
            this.age=17
            this.sex='female'
        },100)//回调函数
    }//指向setTimeout  outer指向window
}

userInfo.updateInfo()
// console.log(userInfo)

setTimeout(function(){
     console.log(userInfo)
},200)