Array.prototype.bubbleSort=function(){
   
    for(let i=0;i<this.length;i++){
        var flag=false
        for(let j=0;j<this.length-i;j++){
            if(this[j]>this[j+1]){
                [this[j],this[j+1]]=[this[j+1],this[j]]
                flag=true
            }
            if(!flag){
                break
            }
        }
    }
}

const arr=[5,4,3,2,1]
arr.bubbleSort()
console.log(arr)