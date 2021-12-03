export { }

const mongoose = require('Mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  pokedexNumber: { type: Number, required: true },
  abilities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ability' }],
  base_experience: { type: Number, required: true },
  forms: [{
    name: { type: String },
    url: { type: String }
  }],
  game_indices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameIndex' }],
  height: { type: Number },
  held_items: [],
  is_default: { type: Boolean },
  location_area_encounters: { type: String, required: true },
  moves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Move' }],
  name: { type: String },
  order: { type: Number },
  past_types: [],
  species: {
    name: { type: String },
    url: { type: String },
  },
  sprites: {
    back_default: { type: String },
    back_female: { type: String },
    back_shiny: { type: String },
    back_shiny_female: { type: String },
    front_default: { type: String },
    front_female: { type: String },
    front_shiny: { type: String },
    front_shiny_female: { type: String },
    other: {
      dream_world: {
        front_default: { type: String },
        front_female: { type: String }
      },
      home: {
        front_default: { type: String },
        front_female: { type: String },
        front_shiny: { type: String },
        front_shiny_female: { type: String }
      },
      "official-artwork": {
        front_default: { type: String }
      }
    }

  },
  stats: [{
    base_state: { type: Number },
    effort: { type: Number },
    stat: {
      name: { type: String },
      url: { type: String }
    }
  }],
  types: [{
    slot: { type: Number },
    type: {
      name: { type: String },
      url: { type: String },
    }
  }],
  weight: { type: Number }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)