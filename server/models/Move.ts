export { }

const mongoose = require('Mongoose')
const Schema = mongoose.Schema

const moveSchema = new Schema({
  move: {
    name: { type: String },
    url: { type: String }
  },
  version_group_details: [{
    level_learned_at: { type: Number },
    move_learn_method: {
      name: { type: String },
      url: { type: String },
    },
    version_group: {
      name: { type: String },
      url: { type: String },
    }
  }]
})

module.exports = mongoose.model('Move', moveSchema)