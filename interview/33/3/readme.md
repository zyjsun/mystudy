# 字符串最大的容量为5M,如果存储溢出了怎么半？
报错（QuotaExceededError）

# 2. 最后一次存储的字符串会存储到最大容量停止还是不会存储？
不会存储
# 3. 既然存在安全问题，那么localStorage的使用就不是绝对安全的，如何更安全的使用localStorage？

# 4.qq.com 可以获取a.qq.com的cookie吗？
子域名可以获取根域名的Cookie，反之则不行

# 5.自己封装一个有过期时间的LocalStorage?


# 6. localStorage在ios设备上无法重复setItem?
  一般在setItem之前先reMoveItem

# 7.sessionStorage,localStorage和cookie的区别
- 数据有效期：
- 存储大小：
- 与服务器的数据交互方式 cook携带在http请求头上

# 8. cookie 和 session的区别？
  cookie保存在客户端，session保存在服务端，当有http请求时，请求将cookie里面的
  （seesion_id）携带到服务端，服务端拿到这个标识去自己的session存储中查找这个时候是否
  存在这个标识，存在即证明客户身份有效。

# 9.session产生的session_id放在cookie里面，如果用户把cookie禁用了，session还能用吗？
 能，通过其他方式获取session_id就行

# 10.为什么session比cookie更安全？
- cookie对用户来说时透明的
- 想攻破session有两步：
   1. 得到session_id,这的有人登录才行
   2. session_id要保证有效