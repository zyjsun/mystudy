const undercore=require('../underscore.js')

let arr=[1,2,3,4,5,63,3,32,2,1]
// console.log([...new Set(arr)])

let newArr=undercore.uniq(arr)
console.log(newArr)