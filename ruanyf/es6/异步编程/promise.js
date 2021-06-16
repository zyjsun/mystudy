// function onResolve(response){
//     console.log(response)
// }
// function onReject(error){
//     console.log(error)
// }

// let xhr=new XMLHttpRequest()
// xhr.ontimeout=function(e){
//     onReject(e)
// }

// xhr.onerror=function(e){
//     onReject(e)
// }

// xhr.onreadystatechange=function(){
//     onResolve(xhr.response)
// }

// let URL='https://time.geekbank.com'
// xhr.open('Get',URL,true)

// xhr.timeout=3000

// xhr.responseType='text'
// xhr.setRequestHeader('X_TEST','time.greekbang')
// xhr.send()

function makeRequest(request_url){
    let request={
        method: 'GET',
        url: 'request_url',
        headers: '',
        body: '',
        sync: true,
        responseType: 'text',
        timeout: 3000
    }
    return request
}

function XFetch(request,resolve,reject){
    let xhr=new XMLHttpRequest()
    xhr.ontimeout=function(e){
    reject(e)}
    xhr.onerror=function(e){
    reject(e)}
    xhr.onreadystatechange=function(){
    if(xhr.status==200){
        resolve(xhr.response)
    } 
}

xhr.open(request.method,URL,request.sync)
xhr.timeout=request.timeout
xhr.responseType=request.responseType
xhr.send()

}

XFetch(makeRequest('https://time.geekbank.com'),
function resolve(data){
    console.log(data)
},function reject(error){
    console.log(error)
})



// // function onResolve(response) { console.log(response);}
// // function onReject(error) { console.log(error);}



// // let URL = 'https://time.geekbang.com'

// // // xhr.setRequestHeader('X_TEST', 'time.geekbang')
// // // xhr.send()




// // function makeRequest(request_url) {
// //   let request = {
// //     method: 'Get',
// //     url: request_url,
// //     headers: '',
// //     body: '',
// //     sync: true,
// //     responseType: 'text',
// //     timeout: 3000
// //   }
// //   return request
// // }

// // function XFetch(request, reslove, reject) {
// //   let xhr = new XMLHttpRequest()
// //   xhr.ontimeout = function (e) { onReject(e) }
// //   xhr.onerror = function (e) { onReject(e) }
// //   xhr.onreadystatechange = function () {
// //     if (xhr.status = 200) {
// //       reslove(xhr.response)
// //     }
// //   }
// //   xhr.open(request.method, URL, request.sync)
// //   xhr.timeout = request.timeout
// //   xhr.responseType = request.responseType
// //   // ....
// //   xhr.send()
// // }


// // XFetch(
// //   makeRequest('https://time.geekbang.org'),
// //   function reslove(data) {
// //     console.log(data);
// //   },
// //   function reject(err) {
// //     console.log(err);
// //   }
// // )






// // XFetch(makeRequest('https://time.geekbang.org/?category'),
// //   function resolve(response) {
// //     console.log(response)
// //     XFetch(makeRequest('https://time.geekbang.org/column'),
// //       function resolve(response) {
// //         console.log(response)
// //         XFetch(makeRequest('https://time.geekbang.org'),
// //           function resolve(response) {
// //             console.log(response)
// //           }, function reject(e) {
// //             console.log(e)
// //           })
// //       }, function reject(e) {
// //         console.log(e)
// //       })
// //   }, function reject(e) {
// //     console.log(e)
// //   })

// // new Promise(() => {

// // })

// function makeRequest(request_url) {
//   let request = {
//     method: 'Get',
//     url: request_url,
//     headers: '',
//     body: '',
//     sync: true,
//     responseType: 'text',
//     timeout: 3000
//   }
//   return request
// }


// function XFetch(request) {
//   function executor(resolve, reject) {
//     let xhr = new XMLHttpRequest()
//     xhr.open('Get', request.url, true)
//     xhr.ontimeout = function (e) { reject(e) }
//     xhr.onerror = function (e) { reject(e) }
//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (xhr.status = 200) {
//           resolve(this.responseText, this)
//         } else {
//           let err = {
//             code: this.status,
//             response: this.response
//           }
//           reject(err, this)
//         }
//       }
//     }
//     xhr.send()
//   }
//   return new Promise(executor)
// }

// let x1 = XFetch(makeRequest('https://time.geekbang.org/?category'))
// let x2 = x1.then(value => {
//   console.log(value)
//   return XFetch(makeRequest('https://time.geekbang.org/column')
// })
// let x3 = x2.then(value => {
//   console.log(value)
//   XFetch(makeRequest('https://time.geekbang.org')
// })

// x3.catch(error => {
//   console.log(error);
// })


function executor(resolve, reject) {
    resolve(100)
  }
  let x1 = new Promise(executor)
  
  function onResolve(value) {
    console.log(value);
    let x2 = new Promise((resolve, reject) => {
      resolve(value + 1)
    })
    console.log(x2);
    return x2
  }
  
  let x2 = x1.then(onResolve)
  // x2.then()


