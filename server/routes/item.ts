export { }
import { Request, response, Response } from 'express'

const express = require('express')
const mongoose = require('mongoose')
const Item = require('../models/Item')
const axios = require('axios')
const router = express.Router()


// Insert one pokemon into database
router.post('/:name', async (req: Request, res: Response) => {
  console.log(req.params)
  const response = await axios.get(`https://pokeapi.co/api/v2/item/${req.params.name}`)
  const { } = response.data

  const item = new Item({
    ...response.data
  })

  const savedItem = await item.save()
  res.json(savedItem)
})

module.exports = router;