class Subscribe{//发布订阅 一对多
    constructor(){
        this.pond=[]
    }
    add(fn){//往容器中增加方法,订阅
        let pond=this.pond,isExit=false;
        //去重
        pond.forEach(item=>item===fn?isExit=true:null)
        !isExit?pond.push(fn):null
    }
    remove(fn){
        let pond=this.pond;
        pond.forEach((item,index)=>{
            if(item===fn){
                pond[index]=null
            }//删除
        })
    }
    fire(...arg){
        let pond=this.pond;
        for(let i=0;i<pond.length;i++){
            let item=pond[i]
            if(item===null){
                pond.splice(i,1)
                i--//数组坍塌
                continue;
            }
            item(...arg)//发布
        }
    }
}