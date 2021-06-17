function executor(resolve, reject) {
  resolve(100)
}

let demo = new Bromise(executor)

function onResolve(value) {
  console.log(value);
}

demo.then(onResolve)



function Bromise(executor) {
  let onResolve_ = null
  let onReject_ = null

  this.then = function(onResolve, onReject) {
    onResolve_ = onResolve
  }

  function resolve(value) {
    setTimeout(() => {
      onResolve_(value)
    }, 0)
  }
  executor(resolve, null)
}

