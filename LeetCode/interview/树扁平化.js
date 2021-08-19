const tree = [{
  id: "1",
  label: "1",
  children: [
    { id: '1-1', label: '1-1' },
    { id: '1-2', label: '1-2' },
    { id: '1-3', label: '1-3' }
  ]
},
{
  id: "2",
  label: "2",
  children: [
    {
      id: '2-1',
      label: '2-1',
      children: [{
        id: '2-1-1',
        label: '2-1-1'
      }]
    },
    { id: '2-2', label: '2-2' },
    { id: '2-3', label: '2-3' }
  ]
}
]

// 实现一个函数： flatTree(tree)
// [{id:'1',label:'1'},{id:'1-1',label:'1-1',parentID: '1'}..]
function flatTree (tree) {
  let arr = []

  let process = (hasChildren, parentid) => {
    for (let j = 0; j < hasChildren.length; j++) {
      hasChildren.parentID = parentid
      arr.push(hasChildren)
    }
  }
  for (let i = 0; i < tree.length; i++) {
    arr.push({ id: tree[i].id, label: tree[i].label })
    if (tree[i].children.length) {
      for (let j = 0; j < tree[i].children.length; j++)
        arr.push({ id: tree[i].children[j].id, label: tree[i].children[j].label, parentID: tree[i].id })
    }
  }
  return arr
}


console.log(flatTree(tree));




// function flat (obj) {
//   let result = {}
//   let process = (key, value) => {
//     //原始类型
//     if (Object(value) !== value) {
//       //原始类型
//       if (key) {
//         result[key] = value
//       }
//     } else if (Array.isArray(value)) {
//       for (let i = 0; i < value.length; i++) {
//         process(`${key}[${i}]`, value[i])
//       }
//       if (value.length == 0) {
//         result[key] = []
//       }
//     } else {
//       let objArr = Object.keys(value)
//       objArr.forEach(item => {
//         process(key ? `${key}.${item}` : `${item}`, value[item])
//       });
//       if (objArr.length === 0 && key) {
//         result[key] = {}
//       }
//     }
//   }
//   process('', obj)
//   return result
// }
// const obj2 = {
//   a: 1
// }
// const obj = {
//   a: 1,
//   b: [1, 2, { c: true }],
//   c: { e: 2, f: 3 },
//   g: null,
// };
// console.log(flat(obj2));