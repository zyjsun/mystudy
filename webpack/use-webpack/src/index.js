// npm i webpack webpack-cli -g --save-dev
//  npm i style-loader css-loader --save-dev
// npm i babel-loader @babel/preset-env @babel/core -D
import style from './index.css'
function comp(){
    const el=document.createElement('div')
    el.innerHTML='<i>Hello World</i>'
    console.log(style);
    return el
}

console.log([1,2,3].findIndex(x=>x===4));
console.log('abc'.padStart(10))//填充空格

document.body.appendChild(comp())