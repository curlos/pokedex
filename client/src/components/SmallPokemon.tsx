import { Box, Button, CardContent, CardMedia, Modal, styled, SxProps, Theme, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonType } from '../types/types'
import { titleCase } from "title-case";

interface Props {
  pokemonObj: any
}

const modalStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 10
}

const PokeTypeColors: any = {
  'normal': '#A5ACAF',
  'fighting': '#D56723',
  'flying': 'linear-gradient(to bottom, #3DC6EF 50%, #BDB9B8 50%)',
  'poison': '#B97FCA',
  'ground': 'linear-gradient(to bottom, #F7DE3E 50%, #AB9842 50%)',
  'rock': '#A38C21',
  'bug': '#729F3F',
  'ghost': '#7B62A4',
  'steel': '#9EB7B8',
  'fire': '#FD7D23',
  'water': '#4592C4',
  'grass': '#9BCB50',
  'electric': '#EFD535',
  'psychic': '#F265B9',
  'ice': '#51C3E7',
  'dragon': 'linear-gradient(to bottom, #53A4CF 50%, #F16E56 50%)',
  'dark': '#717171',
  'fairy': '#FDB8E9',
  'unknown': 'black',
  'shadow': 'black',
}

const StyledTypes = styled('div')`
  margin: 10px auto;
`

const StyledPokeType = styled('span')`
  color: white;
  background: ${(props) => props.color};
  border-radius: 5px;
  padding: 4px;
  margin-right: 5px;
  min-width: 200px;
  border: 2px solid #fff;
  margin-top: 20px;
`

const SmallPokemon = ({ pokemonObj }: Props) => {

  const [pokemon, setPokemon] = useState<Partial<PokemonType>>()
  const [species, setSpecies] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getPokemonInfo = async () => {
      const response = await axios.get(pokemonObj.url)
      const speciesResponse = await axios.get(response.data.species.url)
      setPokemon(response.data)
      setSpecies(speciesResponse.data)
      setLoading(false)
    }
    getPokemonInfo()
  }, [pokemonObj])

  const getFirstDescInEnglish = () => {
    for (let entry of species.flavor_text_entries) {
      if (entry.language.name === 'en') {
        return entry.flavor_text
      }
    }

    return ''
  }

  console.log(pokemon)

  return (
    loading ? <div>Loaidng...</div> : (
      <div>
        <Card sx={{
          marginRight: '10px',
          marginBottom: '10px',
          borderRadius: '10px',
          background: `${(pokemon && pokemon?.types && PokeTypeColors[pokemon.types[0].type.name]) || '#fff'}`,
          cursor: 'pointer'
        }}
          onClick={handleOpen}
        >
          <CardMedia
            component="img"
            alt={pokemon?.name}
            // height="170"
            image={pokemon?.sprites?.other['official-artwork'].front_default}
            sx={{
              filter: "drop-shadow(2px 1px 0 black) drop-shadow(-1px -1px 0 black)"
            }}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ color: '#fff' }}>
              #{pokemon?.id} {pokemon && pokemon.name && titleCase(pokemon?.name)}
            </Typography>

            <StyledTypes>
              {pokemon?.types?.map((typeInfo) => (
                <StyledPokeType color={PokeTypeColors[typeInfo.type.name]}>
                  <Typography variant="body2" component="span">
                    {typeInfo.type.name}
                  </Typography>
                </StyledPokeType>
              ))}
            </StyledTypes>
          </CardContent>
        </Card>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            ...modalStyle,
            bgcolor: (pokemon && pokemon.types && pokemon.types[0].type.name) || '#fff'
          }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              #{pokemon?.id} {pokemon && pokemon.name && titleCase(pokemon?.name)}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {getFirstDescInEnglish()}
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  )
}

export default SmallPokemon
