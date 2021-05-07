var tree={
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    children:[]
                },
                {
                    val:'e',
                    children:[]
                }
            ]
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[]
                },
                {
                    val:'g',
                    children:[]
                }
            ],
        }
    ],
}

//dfs 

const dfs=(root)=>{
    console.log(root.val);
    root.children.forEach(dfs);//递归
}

const bfs=(root)=>{
    const q=[root];//队列
    console.log(q)
    while(q.length>0){
        console.log(q.length)
        const n=q.shift();
   
        console.log(n.val);
        n.children.forEach(child=>{
            console.log(child)
            q.push(child);
        })
    }
}
console.log(bfs(tree))
//console.log(dfs(tree))
