const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GoodImg = new Schema({
  allGoodImg: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('GoodImg', GoodImg)