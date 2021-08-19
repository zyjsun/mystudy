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
    { id: '2-1', label: '2-1' },
    { id: '2-2', label: '2-2' },
    { id: '2-3', label: '2-3' }
  ]
}
]

// 实现一个函数： flatTree(tree)
// [{id:'1',label:'1'},{id:'1-1',label:'1-1',parentID: '1'}..]