// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length===0){
        return false
    }
    let x=0;
    let y=matrix.length-1
    while(x<matrix[0].length&&y>=0){
        if(matrix[y][x]>target){
            y--
        }else if(matrix[y][x]<target){
            x++
        }else{
            return true
        }

    }
};