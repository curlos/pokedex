export { }

const axios = require('axios')
const Pokemon = require('../models/Pokemon')

export const addPokemonToDB = async (pokedexNumber: Number) => {
  // const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
  // console.log(response)

  // console.log(`Adding ${pokedexNumber} to DB`)

  return pokedexNumber
}