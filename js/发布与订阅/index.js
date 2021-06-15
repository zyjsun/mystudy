class EventEmitter{
    constructor(){
        this.events=this.events||new Map()
    }
    emit(type){
        let handle=this.events.get(type)
        handle.apply(this,[...arguments].slice(1))
    }
    addListener(type,fn){
        if(!this.events.get(type)){
            this.events.set(type,fn)//{building: fn}
        }
    }
}

let emitter=new EventEmitter()
//监听，订阅
emitter.addListener('buy',e=>{
    console.log('购买',e)
})

//发布
emitter.emit('building',200)