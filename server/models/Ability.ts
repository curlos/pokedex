export { }

const mongoose = require('Mongoose')
const Schema = mongoose.Schema

const abilitySchema = new Schema({
  ability: {
    name: { type: String },
    url: { type: String }
  },
  is_hidden: { type: Boolean },
  slot: { type: Number }
})

module.exports = mongoose.model('Ability', abilitySchema)