//插入排序
//基于当前元素前面的序列是有序的前提
//从后往前去寻找当前元素在前面那个序列里的正确位置
arr=[5,3,2,4,1]
function insertSort(arr){
    let len=arr.length;
    let temp;//保存当前元素
    for(let i=1;i<len;i++){
        let j=i//帮助temp找到自己的定位
        temp=arr[i]

        while(j>0&&arr[j-1]>temp){//temp去哪个位置
            arr[j]=arr[j-1]//给temp让位
            j--
        }
        //循环让位
        arr[j]=temp//上位
    }
    return　       
}