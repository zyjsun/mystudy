//字符串处理
//如果字符串超过140字，返回false .length? len()
// - 如果是空字符，返回false
// - 以#开头
// - 每一个单词首字母大写
// hello world
// #  Hello  World

/** 
 * @author zz
 * @date 2021-4-16
 * @param{string} str
 * @func 格式化字符串，返回#开始的大写单词
 * @return {string}
 * 
*/
function generateHashTagWithCapitalWords(str){
        // return str.length>140||str==''?false:'#'+str;
         if(str.length>140||str=='')
         {
             return false;
         }else{
             var words=str.split(' ');//转换成数组 根据空格切割
             console.log(words);
             //对每个单词都去大写化
             //1.forEach 支持遍历每个元素 执行一个callback
              //  words= words.forEach(word => word.charAt(0).toUpperCase()+word.slice(1))
              //  console.log(words)
             //2.map 也有同上功能，但它能返回一个新数组 一个旧数组到一个新数组的过程
             words=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
             console.log(words);
          
             //输出undefined 无返回值 执行一遍
            return '#'+words.join(' ')
         }       
}
function generateHashTagWithCapitalWordss(str){
    return str.length>140||str==''?false:'#'+str.split(' ').map(capitalize).join(' ')
      }
function capitalize(word){
             return word.charAt(0).toUpperCase()+word.slice(1)}
console.log(generateHashTagWithCapitalWords('hello world'))
console.log(generateHashTagWithCapitalWordss('hello world'))