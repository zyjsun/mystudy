function myInstanceof(left,right){
  let proto=left._proto_;
  let prototype=right.prototype
  while(L!=null){//最上层
  if(proto==prototype){
      return true
  }else{
      proto=left._proto_
  }
}
return false
}
var str1=new String('hello world')
console.log(myInstanceof(str1,String))