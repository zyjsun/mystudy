function loadImageAsync (url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onload = function () {
      resolve(image)
    }
    image.src = url
  })
}
//异步加载图片
loadImageAsync('url').then('zz')