// 什么是XSS攻击？如何防范？ 脚本攻击
// 持久型：写入数据库
<script>alert('zzzz')</script>
// 非持久型：http://www.test.com?name=<script>alert('zzzz')</script>
function escape (str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}

// const xss=require('xss')

// 什么是CSRF攻击？如何把防范？
// 跨站请求伪造

// 防御：用post接口
// get请求不对数据进行修改
// 不让第三方网站访问用户cookie
// 阻止第三方网站请求接口
// 请求时附带验证信息，比如token