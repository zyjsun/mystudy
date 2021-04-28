let str='aaaa19979113182eqee'
const reg = /^\d{11}$/;
let reg2=/[0-9]{11}/
const emailReg=/[0-9a-z-_]+@[0-9a-z-_]+\.com/;//加号一次或多次
//console.log(reg.exec(str))
console.log(reg.test(str))
console.log(reg2.exec(str))
console.log(emailReg.test('1821554162@qq.com'))