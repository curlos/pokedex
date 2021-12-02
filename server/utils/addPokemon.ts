export { }

const Pokemon = require('../models/Pokemon')

export const addPokemonToDB = async (pokedexNumber: Number) => {
  console.log(`Adding ${pokedexNumber} to DB`)

  return pokedexNumber
}