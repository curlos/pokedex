import PokemonType from "../graphql_types/PokemonType";

export { }

const graphql = require('graphql')
const Pokemon = require('../models/Pokemon')
const { addPokemonToDB } = require('../utils/addPokemon')

const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObject
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemon: {
      type: GraphQLInt,
      args: { pokedexNumber: { type: GraphQLInt } },
      resolve(parent: any, args: any) {
        const fetchFromAPI = async () => {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
          console.log(response.data)
          return 1
        }
        fetchFromAPI()
        // return Pokemon.findOne({ pokedexNumber: args.pokedexNumber })
      }
    },
    allPokemon: {
      type: GraphQLInt,
      resolve(parent: any, args: any) {
        return 1
        // return Pokemon.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPokemon: {
      type: PokemonType,
      args: {
        pokedexNumber: { type: GraphQLInt }
      },
      resolve(parent: any, args: any) {
        const fetchFromAPI = async () => {
          console.log(args)
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
          console.log(response.data)
          const { id, ...others } = response.data
          const pokemon = new Pokemon({
            pokedexNumber: id,
            ...others
          })
          return pokemon
        }

        fetchFromAPI()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})