const isValidSudoku = arr => {
  for(let i=0;i<9;i++){
    //遍历行与列  row 行  cloum 列
   let row=new Set(),cloum=new Set();
   for(let j=0;j<9;j++){
       if(arr[i][j]!=='.'){
           if(row.has(arr[i][j]))
           return false
           row.add(arr[i][j])
       }
       if(arr[j][i]!=='.'){
        if(cloum.has(arr[j][i]))
        return false
        row.add(arr[i][j])
    }
   }
   //遍历小宫格
let block=new Set()
let x=(i/3>>0)*3,y=i%3*3
for (let j = 0; j < 9; j++) {
    if (arr[x][y] !== '.') {
      if (block.has(arr[x][y])) return false
      block.add(arr[x][y])
    }
    y++
    if ((j + 1) % 3 === 0) {
      x += 1  //每行的三个已经遍历完了
      y -= 3  
    }
  }

  }
  return true
}
  
