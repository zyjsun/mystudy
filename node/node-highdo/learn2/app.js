const express=require('express')
const superagent=require('superagent')
const cheerio=require('cheerio')

const app=express()

app.get('/',(req,ress,next)=>{
    // 用superagent去拿到目标页面内容
    superagent.get('https://cnodejs.org/').end((err,res)=>{
        if(err){
            return next(err)
        }
            let $=cheerio.load(res.text)
            let items=[]
            $('#topic_list .topic_title').each((idx,element)=>{
               let $element=$(element)
               items.push({
                   title: $element.attr('title'),
                   href: $element.attr('href')
               })
            })
            ress.send(items)
    })
})

app.listen(3001)