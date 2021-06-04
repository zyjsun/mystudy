// npm i webpack webpack-cli --save-dev

function comp(){
    const el=document.createElement('div')
    el.innerHTML='<i>Hello World</i>'
    return el
}

document.body.appendChild(comp())