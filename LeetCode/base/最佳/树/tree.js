function ListNode(val,next){
    this.cal=val
    this.next=null
}

function TreeNode(){
    this.val=this.val//数据域
    this.left=null
    this.right=null
}

// const node=new TreeNode(1)
const root={
    val: 'A',
    left:
        {
            val: 'B',
            left:
                {
                    val: 'C',
                }
                ,
            right:{
                   val: 'D'
                }  
        }
    ,
    right:{
        val: 'E',
        right:{
            val: 'F'
        }
    }

    
}
const preorder= (root)=>{
    if(!root){
        return
    }
    console.log('当前遍历的节点',root.val)
    preorder(root.left)
    preorder(root.right)
}
console.log(preorder(root))

function inorder(root){
    if(!root){
        return
    }
    inorder(root.left)
    console.log('当前遍历的节点',root.val)
    inorder(root.right)
}

function posorder(root){
    if(!root){
        return
    }
    posorder(root.left)
    posorder(root.right)
    console.log('当前遍历的节点',root.val)
}
console.log('中序遍历')
inorder(root)

console.log('后序遍历')
posorder(root)