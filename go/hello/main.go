package main //模块化
import "fmt"
func main(){//入口函数
fmt.Println("hello,world")
var a int=100
var b int=200
var ret int
ret=max(a,b)
fmt.Printf("最大值为：%d\n",ret)
}
//一般函数
//num2 int,函数返回类型为整数
func max(num1,num2 int)int{
	var result int
	if(num1>num2){
		result=num1;
	}else{
		result=num2;
	}
	return result
}