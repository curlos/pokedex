

export { }

const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
  {
    attributes: {
      name: { type: String },
      url: { type: String },
    },
    baby_trigger_for: { type: String },
    category: {
      name: { type: String },
      url: { type: String },
    },
    cost: { type: Number },
    effect_entries: [{
      effect: { type: String },
      language: {
        name: { type: String },
        url: { type: String },
      },
      short_effect: { type: String }
    }],
    flavor_text_entries: [{
      language: {
        name: { type: String },
        url: { type: String },
      },
      text: { type: String },
    }],
    fling_effect: { type: String },
    fling_power: { type: String },
    game_indices: [{
      game_index: { type: Number },
      generation: {
        name: { type: String },
        url: { type: String },
      }
    }],
    held_by_pokemon: [],
    id: { type: Number },
    machines: [],
    name: { type: String },
    names: [{
      language: {
        name: { type: String },
        url: { type: String },
      },
      name: { type: String }
    }],
    sprites: {
      default: { type: String }
    }
  },
  { timestamps: true }
)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item