const leftToRight={  //map对象
    "(":")",
    "{":"}",
    "[":"]"
}


var isValid = function(s) {
    if(!s){
        return true
    }
    if(s.length%2!==0)
       return false
    //
    const stack=[]
    const len=s.length
    for(let i=0;i<len;i++){
        const ch=s[i]
        if(ch=='('||ch=='['||ch=='{'){
            stack.push(leftToRight[ch])//丢的右括号值
        }
        else{
            if(!stack.length||stack.pop()!==ch){
                return false
            }
         }
        }
        return !stack.length
    }
const s='([])'
console.log(isValid(s));
