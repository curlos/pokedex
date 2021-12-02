export { }

const graphql = require('graphql')
const Pokemon = require('../models/Pokemon')
const { addPokemonToDB } = require('../utils/addPokemon')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const AbilityType = new GraphQLObjectType({
  name: 'Ability',
  fields: () => ({
    ability: {
      name: { type: String },
      url: { type: String }
    },
    is_hidden: { type: Boolean },
    slot: { type: Number }
  })
})

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLID },
    pokedexNumber: { type: GraphQLInt },

  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemon: {
      type: PokemonType,
      args: { pokedexNumber: { type: GraphQLInt } },
      resolve(parent: any, args: any) {
        return Pokemon.findOne({ pokedexNumber: args.pokedexNumber })
      }
    },
    allPokemon: {
      type: new GraphQLList(PokemonType),
      resolve(parent: any, args: any) {
        return Pokemon.find({})
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
      resolve: async (parent: any, args: any) => {
        const results = await addPokemonToDB(args.pokedexNumber)
        console.log(results)
        return results
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})