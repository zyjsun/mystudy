function ListNode(val){
    this.val=val;
    this.next=null; //指向下一个结点
}
    var odd_even_list=function(head)
    {
        if(!head||!head.next)
        return head;
        const dummy1={
              next: head
        }
        const dummy2={
            next: head.next
        }
        let odd=dummy1.next;//奇数结点
        let even=dummy2.next;//偶数结点
        while(odd&&odd.next&&even&&even.next){
            const oddNext=odd.next.next;//下一个奇数结点
            const evenNext=even.next.next;//下一个偶数结点
            odd.next=oddNext;//当前结点的next指向
            even.next=evenNext;
            odd=oddNext;
            even=evenNext;
        }
        odd.next=dummy2.next;//拼接奇偶链表
        return dummy1.next;
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
console.log(odd_even_list(n1));