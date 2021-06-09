<!-- 浏览器的同源策略 同域名下运行，不同源不安全 -->

# 跨域的解决方案
1. jsonp
    借助script标签不会被同源机制所跨域，客户端发送script请求，参数中带着处理返回数据的回调函数，服务端接收到请求并帮助执行掉这回调函数

    缺点：
    1. 由于借助script脚本请求方式，所以只适用get请求
    2. 调用失败不会返回各种http状态码
    3. 安全性不高,jsonp的服务存在页面注入漏洞

2. cors(跨域资源共享)
浏览器会利用HTTP协议中的OPTIONS方法对请求做预检，判断是复杂请求还是简单请求

客户端预检：
Access-Control-Request-Method //请求的方法

Access-Control-Request-Headers //请求的头部
Origin   //请求发出的域

服务端应答：
Access-Control-Allow-Origin //能发出这个请求的域名
Access-Control-Allow-Method //允许发出请求的方法
Access-Control-Allow-Header //允许发出请求的头部字段
Access-Control-Allow-Age // 域检请求能被缓存的最长时间，在这个时间内，同一个请求不会再次发出预检请求

- 简单请求
   如果是简单请求，该请求会携带Origin，如果Origin不在
   服务端的Access-Control-Allow-Origin中，浏览器就会拦截响应
- 复杂请求
  和简单请求不同的地方主要体现在 预检 和 响应

3. Nginx Proxy
  Ngnix启动服务器代理请求，因为服务器是没有同源策略的

4. webscoket
    
