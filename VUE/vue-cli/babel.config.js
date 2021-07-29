module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 1 version"] // 最近的两个版本的浏览器
      }
    }]
  ]
}