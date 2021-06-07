const eventproxy=require('eventproxy')
const superagent=require('superagent')

const cheerio= require('cheerio')

const url=require('url')

const cnodeUrl='https://cnodejs.org/'

superagent.get(cnodeUrl).end((err,res)=>{
    if(err){
        return console.error(cnodeUrl)
    }
    let topicUrls=[]
    let $=cheerio.load(res.text)

    $('#topic_list .topic_title').each((idx,element)=>{
            let $element=$(element)
            let href=url.resolve(cnodeUrl,$element.attr('href'))
            topicUrls.push(href)
    })

    console.log(topicUrls);
    //优化并发参数
    let ep=new eventproxy()//代理
    //命令ep 重复监听 topicUrls.length
    ep.after('topic_html',topicUrls.length,(topics)=>{
        //topics是个数组， 包含了40次ep.emit('topic_html',pair)
        topics=topics.map((topicPair)=>{
                let topicUrl=topicPair[0]
                let topicHtml=topicPair[1]
                let $=cheerio.load(topicHtml)
                return({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment1: $('.reply_content p').eq(0).text().trim()
                })
        })
        console.log(topics)
    })

//触发四十次请求
topicUrls.forEach((topicUrl)=>{
    superagent.get(topicUrl).end((err,res)=>{
        console.log('fetch'+topicUrl+'success')
            ep.emit('topic_html',[topicUrl,res.text])
    })
})

})

