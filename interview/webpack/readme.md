# 核心打包原理
1. 读入口文件里面的所有内容
2. 分析入口文件，递归的去读取所依赖的模块，生成AST
3. 根据AST，生成浏览器能运行的代码

# 细节
1. 获取模板内容
2. 分析模块 --@babel/parser
3. 处理模块内容
  - @babel/traverse(遍历AST收集依赖) js中import中的所依赖的文件
  - @babel/core 和@babel/preset-env (将es6转es5)
4. 递归所有模块
5. 生成代码

浏览器无法识别import
Node 为依赖