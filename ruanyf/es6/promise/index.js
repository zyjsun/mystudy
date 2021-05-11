// var a = 1

// console.log(a);

// function b() {
//   console.log(123);
// }

// setTimeout(function() {
//   console.log('abc');
// }, 1000)

// b()

// console.log(234);

function xq(){
    return new Promise((reslove,reject)=>{
        setTimeout(function(){
            console.log(1);
            reslove('success')
        },1000)
    })
}

function marry(){
    return new Promise((reslove,reject)=>{
    setTimeout(function(){
        console.log(2);
        reslove('happy')
    },500)
    })
}

function baby() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('小杨出生');
        resolve()
      }, 300)
    })
  }
  function baby2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('小杨2出生');
        resolve()
      }, 200)
    })
  }
  function baby3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('小杨3出生');
        resolve()
      }, 600)
    })
  }

// xq().
// then((res)=>{
//     console.log(res);
//     return marry()
// })
// .then((res)=>{
//     console.log(res);
//     baby()
// })

// xq().catch((err)=>{
//     console.log(err);
//     again()
// })

// xq().then(marry).then(baby)

function again(){
    console.log('再来一遍')
}

function buyhouse(){
    console.log('byhouse')
}
const p=Promise.race([baby(),baby2(),baby3()])//promise对象
p.then(buyhouse)