const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Lovetext = new Schema({
  goodArr: {
    type: Array,
    default: []
  },
  _id: {
    type: String,
    default: ''
  }

})

module.exports = mongoose.model('Lovetext', Lovetext)