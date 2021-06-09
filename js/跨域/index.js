const http=require('http')
const querystring=require('querystring')//处理字符串

const server=http.createServer((req,res)=>{
    const url=req.url
    const query=querystring.parse(url.split('?')[1])
    const {name,age,callback}=query//query.callback
    console.log({callback})
    const data={
        name: name,
        age: age
    }
    res.end(`${callback}('${JSON.stringify(data)}')`)//getMsg(data) 这句话返回到前端
    

})

server.listen(3000)











