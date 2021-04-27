function ListNode(val){
    this.val=val;
    this.next=null; //指向下一个结点
}
// 下个结点 -后续结点
// 当前结点 除了头结点都有前驱结点
var reverseList= function (head){
    if(!head||!head.next) 
      return head;//空链表只有一个结点
    let cur=head;//当前结点
    let pre=null;//前驱结点
    while(cur)//遍历
    {
        const next=cur.next;//后继结点
        cur.next=pre;//反过来 将当前结点的指针指向前一个结点
        //如果cur为头结点
        pre=cur;//前驱结点变成当前结点
        cur=next;//后继结点变成当前结点
    }

}
//1-2-3-4-5-null
//5-4-3-2-1-null
const n1=new ListNode(1);
const n2=new ListNode(2);
const n3=new ListNode(3);
const n4=new ListNode(4);
const n5=new ListNode(5);
n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
console.log(n1);
reverseList(n1);
 console.log(n5);