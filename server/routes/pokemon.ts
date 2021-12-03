export { }
import { Request, Response } from 'express'

const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('../models/Pokemon')
const axios = require('axios')
const router = express.Router()


// Insert one pokemon into database
router.post('/:name', async (req: Request, res: Response) => {
  console.log(req.params)
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
  const { id, moves, ...others } = response.data

  const pokemon = new Pokemon({
    pokedexNumber: id,
    ...others
  })

  // res.json(pokemon)

  // const savedPokemon = await pokemon.save()
  res.json(pokemon)
})

module.exports = router;