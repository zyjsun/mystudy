# 如何理解Html语义化
1. 易懂（增加代码的可读性）
2. 让搜素引擎更容易读懂（SEO）

# 块级元素与内联元素？
1. display: block/table div h1 h2 table ul ol p
2. display: inline/inline-block span img input button

# css-布局
 - 盒模型宽度计算 offsetWidth=(内容宽度+内边距+边框)，无外边距 boder-box
    就是到边框的boder-box的宽度（包括content+padding+boeder）
 - magin纵向重叠 
   相邻元素的margin-top 和 margin-bottom会发生重叠
   空白内容的<p></p>也会重叠
 - magin赋值问题 margin-top和margin-left负值，元素向上，元素向左移动
   margin-right.右侧元素移动，自生不受影响，margin-bottom同理
 - BFC float不是none postion是absolute或fixed overflow不是visible display是flex inline-block
    1. 清楚浮动

# float布局
  圣杯布局和双飞翼布局
  - 使用float布局
  - 两侧使用margin负值，以便和中间内容横向重叠
  - 防止中间内容被两侧覆盖，一个用padding,一个用margin
  .clearfix :after{
    content: '';
    display:table;
    clear: both;
  }

# CSS-定位
 - absolute 和 relative分别依据什么定位？
 - 居中对齐有哪些实现方式？
relative 依据自身定位  absolute 依据最近一层的定位元素定位。 有的话
 * absolute relative fixed
 没有
 * body
# 水平居中
 inline元素： text-align:center;
 block元素：margin auto

# 垂直居中
 inline元素： line-height等于height值
 absolute元素： top:50%+margin-top负值
  absolute元素： transform(-50%,-50%)
  absolute元素：top,left,bottom,right=0+margin:auto
- line-height如何继承
  %先算完后在继承

# css响应式
- rem是什么？（长度单位）
   px,绝对长度单位 em 相对长度单位，相对于父元素。 rem,相对长度元素，相对于根元素，常用于响应式布局

 