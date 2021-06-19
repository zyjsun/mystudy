function tmpl(str, data) {
    let str = document.getElementById(str).innerHTML
  
    let string = "var p = []; p.push('" +
              str.replace(/[\r\t\n]/g, "")//回车变为空
                  .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
                  .replace(/<%/g, "');")
                  .replace(/%>/g, "p.push('")
                  + "')"
    eval(string)//代码生效
  
    return p.join('')
  }
  