# 清除浮动
1. 在同级临后的元素使用clear属性
2. 父元素结束标签之前插入清除浮动块级元素
3. 给父元素增加一个 伪元素 在伪元素上做clear操作
4. BFC容器  把父容器设置成BFC容器   

# BFC(Block Formatting Context) 块级格式化上下文
1. 计算BFC高度时，浮动元素也参与计算
2. Bfc就是页面上的一个隔离的独立容器
3.  解决margin重叠问题

# 创建条件
1. overflow 值为 auto hidden overlay scroll
2. 