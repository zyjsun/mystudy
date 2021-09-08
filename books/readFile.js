//先读取 在匹配 在输出
const fs = require('fs')
let data = fs.readFileSync('./params.json')
let list = JSON.parse(data)
let traget = []
// for (let item in list) {
//   // console.log(item);
//   if (list[item].Attributes && list[item].Attributes.id < 8000) {
//     traget.push({
//       name: 'flaw_type_' + list[item].Attributes.id,
//       nickName: list[item].Attributes.show
//     })
//     for (let tar in list[item]) {
//       if (list[item][tar].Attributes) {
//         traget.push(
//           {
//             name: 'flaw_type_' + list[item][tar].Attributes.id,
//             nickName: list[item].Attributes.show + '_' + list[item][tar].Attributes.show
//           }
//         )
//       }

//     }
//   }
// }
// fs.writeFile('./my.json', JSON.stringify(traget), (err) => {
//   if (!err) {
//     console.log('文件写入完成')
//   }
// })

function target (list) {
  for (let item in list) {
    if (list[item].Attributes && list[item].Attributes.id < 8000) {
      traget.push({
        name: 'flaw_type_' + list[item].Attributes.id,
        nickName: list[item].Attributes.show
      })
      target(list[item])
    }
  }
}