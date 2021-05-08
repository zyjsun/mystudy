function $(id){
  return typeof id==='string'?document.getElementById(id):id
}
//$('tab')//document.getElementById('tab')


window.onload=function(){
   var titleName=$('tab-title').getElementsByTagName('li')
//    titleName[0].onmouseover=function(){

//    }
 // var text=$('tab-content').getElementsByClassName('tabct')
 var text=$('tab-content').getElementsByTagName('div')

for(let i=0;i<titleName.length;i++){
    titleName[i].onmouseover=function(){
           
        //移除所有当前所有li身上的类名
        for(var j=0;j<titleName.length;j++){
            titleName[j].className=''
            text[j].style.display='none' 
        }
        this.className='select'
        text[i].style.display='block'
    }
}
}