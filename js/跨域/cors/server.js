const http=require('http')
//简单请求
let server=http.createServer((req,res)=>{
    res.writeHead(200,{
       "Content-Type": "text/plain",//设置请求头的类型
       "Access-Control-Allow-Origin": "*" ,//  *表示允许所有的域来请求我
       "Access-Control-Allow-Method": "PUT,POST,GET",
       "Access-Control-Allow-Headers": "X-Custom-Header",
       "Access-Control-MAx-Age": 2000,
       "Access-Control-Allow-Credentials": true//存在cookies,读取cookies中的值
    })
    let resData={}
    let postData=[]
    req.on('data',chunk=>{
        postData.push(chunk)
    })
    req.on('end',()=>{
        resData.postData=Buffer.concat(postData).toString()
        res.end(JSON.stringify(resData))

    })
  
})

server.listen(3000)