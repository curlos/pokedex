import Card from '@mui/material/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonType } from '../types/types'

interface Props {
  pokemonObj: any
}

const SmallPokemon = ({ pokemonObj }: Props) => {

  const [pokemon, setPokemon] = useState<Partial<PokemonType>>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFromAPI = async () => {
      const response = await axios.get(pokemonObj.url)
      setPokemon(response.data)
      setLoading(false)
    }
    fetchFromAPI()
  }, [])

  console.log(pokemon)

  return (
    loading ? <div>Loaidng...</div> : (
      <Card>
        {pokemon?.name}
        <img src={pokemon?.sprites?.other['official-artwork'].front_default} alt={pokemon?.name} />
      </Card>
    )
  )
}

export default SmallPokemon
