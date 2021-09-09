// let xhr=new XMLHttpRequest()
// xhr.open(method,url,async)
// xhr.onreadystatechange=()=>{
//   if(xhr.readyState==4&&xhr.status==200){
//       console.log(xhr.responseText);
//   }
// }
// xhr.send(null)


function ajax (url, method, cb) {
  //创建Ajax实例，打开请求，发送请求配置项。事件监听，发送ajax请求
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {//基于这个事件可以获取服务器返回的响应头响应主体
      cb()
    } else {
      console.log('fail');
    }
  }
  xhr.send(null)
}