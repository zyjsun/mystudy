const https = require('https')
const cheerio = require('cheerio')//在node中帮助我们做获取dom结构的插件

const fs = require('fs')
https.get('https://www.mafengwo.cn/gonglve/', (res) => {
  let html = ''
  res.on('data', (chunck) => {
    html += chunck;
  })
  res.on('end', () => {
    const $ = cheerio.load(html)
    // console.log(html);
    let travelList = [];
    // console.log($('li'))
    $('.feed-item').each(function () {
      let imgArr = []
      const title = $('.title', this).text()
      const content = $('.txt .info', this).text()
      const content2 = $('.art .info', this).text()
      let info = content == '' ? content2 : content
      imgArr.push($('.clearfix img', this).attr('src'))
      travelList.push({ title, info, imgArr })
    })
    fs.writeFile('./travel.json', JSON.stringify(travelList), (err) => {
      if (!err) {
        console.log('文件写入完成')
      }
    })

  })
})

// https.get('https://movie.douban.com/top250', (res) => {
//   let html = '';
//   res.on('data', (chunk) => {//相当于监听器
//     html += chunk;
//   })
//   res.on('end', () => {
//     console.log(html);
//     const $ = cheerio.load(html)

//     // let allFilms = []

//     console.log($('li .item'))
//   })
// })
// $('li .item').each(function () {//遍历每个对象
//   const title = $('.hd .title', this).text()//读值
//   const star = $('.bd .star .rating_num', this).text()
//   const src = $('.pic img', this).attr('src')//获取属性
//   allFilms.push({ title, star, src })
// })
//     // console.log(allFilms)
//     fs.writeFile('./file.json',JSON.stringify(allFilms),(err)=>{
//       if(!err){
//           console.log('文件写入完成')
//       }
//     })

//     //数组转换成字符串
//     })

// })
//res获取的全部资源
// const server=http.createServer((req,res)=>{
//     res.end('welcome no thanks')

// })

// server.listen(3000)

