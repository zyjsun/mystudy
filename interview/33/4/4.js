function stopBubble (e) {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    //ie
    window.event.cancelBubble = true
  }
}

//阻止捕获 ie中没有
// 同上 e.stopPropagation()
function stopCapture () {

}

//阻止默认事件
function stopDefault (e) {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    //ie
    window.event.returnValue = true
  }
}