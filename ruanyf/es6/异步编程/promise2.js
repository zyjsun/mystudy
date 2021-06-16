function executor(resolve, reject) {
    let rand = Math.random();
    console.log(1)
    console.log(rand)
    if (rand > 0.5)
        resolve()
    else
        reject()
}
var p0 = new Promise(executor);

var p1 = p0.then((value) => {
    console.log("succeed-1")
    return new Promise(executor)
})

var p2 = p1.then((value) => {
    console.log("succeed-2")
    return new Promise(executor)
})

var p3 = p2.then((value) => {
    console.log("succeed-3")
    return new Promise(executor)
})

p3.catch((error) => {
    console.log("error")
})
console.log(2)
