export { }

const mongoose = require('Mongoose')
const Schema = mongoose.Schema

const gameIndexSchema = new Schema({
  game_index: { type: Number },
  version: {
    name: { type: String },
    url: { type: String },
  }
})

module.exports = mongoose.model('GameIndex', gameIndexSchema)