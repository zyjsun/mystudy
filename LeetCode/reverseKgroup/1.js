function ListNode(val){
    this.val=val;
    this.next=null; //指向下一个结点
}

var reverseKGroup = function(head, k) {
    if(!head||k==1){
        //空链表k为1
        return head
    }
    var dummy={
        next: head
    }
    var start=dummy;
    var end=head    //?与k有关  这个小组第一个结点
    var count=0;//计数
    while(end!=null){//一次遍历
        count++;
        if(count%k==0){//整除 要反转 得到小组
            start=reverse(start,end.next)//更新start 一次反转后 start 应该是这次反转的尾结点，反转跟其他小组链上
            end=start.next//第一个结点
            }else{
              end=end.next//更新end值
            }
        }
          return dummy.next; 
    }

//start ,end 是要reverse的
//一次反转
var reverse=function(start,end){
 var cur=start.next;//头结点 dummy 1开始
 var pre=start;//前驱结点
 var first=cur;//保存第一个结点 尾结点 下一组头指针
 while(cur!=end){// end  3 当前小组的[1,2]
     var temp=cur.next;//temp 下一个结点来
     cur.next=pre//reverse
     pre=cur;//当前结点变成下一次的前驱结点
     cur=temp;//当前结点为下一个结点
 }
 //   pre变成小组里的头结点
 start.next=pre;
 first.next=cur;//原来的头结点变成了尾结点
 //小组之间链起来 ，上一次的尾结点指向下一个小组开始结点
 return first;

}
const n1=new ListNode(1);
const n2=new ListNode(2);
const n3=new ListNode(3);
const n4=new ListNode(4);
const n5=new ListNode(5);
n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
console.log(reverseKGroup(n1,2))


