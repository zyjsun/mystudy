var minwindow=function(s,t){
      let l=0;
      let r=0;
      const need=new Map();
      for(let c of t){
          need.set(c,need.has(c)?need.get(c)+1:1)
          //t为子串，记录每个的字母出现的次数
      }
      let needType=need.size;//图中的个数
      let res='';
      while(r<s.length){
          const c=s[r];
          if(need.has(c)){
              need.set(c,need.get(c)-1);
              if(need.get(c)==0) needType-=1;
          }
          while(needType===0){
              const newstr=s.substring(l,r+1)
              if(!res||newstr.length<res.length)res=newstr;
              const c2=s[l]
              if(need.has(c2)){
                  need.set(c2,need.get(c2)+1);//左指针移动
                  if(need.get(c2)===1) needType+=1;//需求加一
              }
              l=l+1
          }
          r=r+1
      }
      return res
}
let s='asdfsdfdfghgggjhjjkjwefred'
let t='fgh'
console.log(minwindow(s,t))