
import { AppBar, Grid } from '@mui/material'
import Container from '@mui/material/Container'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SmallPokemon from '../components/SmallPokemon'

const style = {
  padding: '50px 100px',
} as const

const PokemonList = () => {

  const [allPokemon, setAllPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFromAPI = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=130`)
      setAllPokemon(response.data.results)
      setLoading(false)
    }
    fetchFromAPI()
  }, [])

  return (
    loading ? <div>Loading...</div> : (
      <Container disableGutters sx={style}>
        <Grid container>
          {allPokemon.map((pokemonObj) => (
            <Grid item xs={3} md={3}>
              <SmallPokemon pokemonObj={pokemonObj} />
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  )
}

export default PokemonList
