# 1.ajax的实现

# 2.readyState状态码？
0=> UNSET 刚创建xhr,还没有发送
1=> Opened 已经执行了open这个操作
2=> HEADERS_RESERVED 已经发送Ajax，响应头已经被客户端接受
3 => LOADING 响应主体内容正在返回
4 => DONE 响应主体已经被客户端接收

# 3.怎么中止请求？
xhr.abort()

# 4.实现一个xhr请求的进度条？
