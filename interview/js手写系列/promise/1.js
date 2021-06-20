class Promise{
    constructor(executor){
        //初始化状态为等状态
        this.state='pending';
        //成功的值
        this.value=undefined;
        //失败的原因
        this.reason=undefined;
        //成功存放的数组
        this.onResolvedCallbacks=[];
        //失败存放法数组
        this.onRejectedCallBacks=[];
        let resolve=value=>{
            // state改变,resolve调用就会失败
            if(this.state==='pending'){
                // resolve调用后，state转化为成功态
                this.state='fullfilled'
                //存储成功的值
                this.value=value
                //一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn=>fn());
            }

        };
        let reject=reason=>{
               // state改变,reject调用就会失败
               if(this.state==='pending'){
                     // reject调用后，state转化为失败态
                this.state = 'rejected';
                // 储存失败的原因
                 this.reason = reason;
                 //一旦reject执行，调用失败数组的函数
                 this.onRejectedCallBacks.forEach(fn=>fn())
               }
        };
         // 如果executor执行报错，直接执行reject
    try{
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    then(onFulfilled,onRejected) {
        //声明并返回promise2
    let promise2=new Promise((resolve,reject)=>{
        // 状态为fulfilled，执行onFulfilled，传入成功的值
        if (this.state === 'fulfilled') {
          onFulfilled(this.value);
        };
        // 状态为rejected，执行onRejected，传入失败的原因
        if (this.state === 'rejected') {
          onRejected(this.reason);
        };
        //当状态为pending时
        if(this.state==='pending'){
        //onFullfilled传入成功的数组
        this.onResolvedCallbacks.push(()=>{
            onFulfilled(this.value)
        })
        //onRejected传入失败的数组
        this.onRejectedCallBacks.push(()=>{
            onRejected(this.value)
        })
        }
    })
      }
    
 
}