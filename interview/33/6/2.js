function addEvent (element, type, handle) {
  if (element.addEventListener) {
    element.addEventListener(type, handle)
    break
  } else if (element.attachEvent) {
    addEvent = function (type, element, handle) {
      element.attachEvent('on' + type, handle)
    }
  } else {
    element['on' + type] = handle
  }
}//惰性载入