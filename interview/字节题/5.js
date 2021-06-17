//position中的relative fixed absolute 各有什么区别

// relative: 生成相对定位的元素，相对于元素自己的正常的位置来定位，不会脱离文档流
// fixed:生成绝对定位的元素，相对于浏览器窗口来定位，会脱离文档流
//absolute:生成绝对定位的元素，相对于static定义以外的第一个父容器定位，会脱离文档流 display 变为block 让元素覆盖在非定位元素之上