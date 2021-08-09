let proto = {

}
function defineGetter (prop, name) {
  //proto__defineGetter__ 给proto里面的某一个属性绑定一个函数
  //当这个属性被访问，该函数会执行
  proto.__defineGetter__(name, function () {
    return this[prop][name]
  })
}

function defineSetter (prop, name) {
  proto.__defineSetter__(name, function (val) {
    this[prop][name] = val
  })
}
defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')

defineSetter('response', 'body')
module.exports = proto