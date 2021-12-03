import { GraphQLBoolean } from "graphql";

const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLID },
    pokedexNumber: new GraphQLNonNull(GraphQLInt),
    abilities: new GraphQLList(AbilityType),
    base_experience: { type: GraphQLInt },
    forms: new GraphQLList(NameURLType),
    game_indices: new GraphQLList(GameIndexType),
    height: { type: GraphQLInt },
    is_default: { type: GraphQLBoolean },
    location_area_encounters: { type: GraphQLString },
    moves: new GraphQLList(MoveType),
    name: { type: GraphQLString },
    species: { type: NameURLType },
    sprites: { type: SpritesType },
    stats: { type: StatsType },
    types: new GraphQLList(PokemonTypeType),
    weight: { type: GraphQLInt }
  })
})

const AbilityType = new GraphQLObjectType({
  name: 'Ability',
  fields: () => ({
    id: { type: GraphQLID },
    ability: { type: NameURLType },
    is_hidden: { type: GraphQLBoolean },
    slot: { type: GraphQLInt }
  })
});

const MoveType = new GraphQLObjectType({
  name: 'Move',
  fields: () => ({
    id: { type: GraphQLID },
    move: { type: NameURLType },
    version_group_details: new GraphQLList(VersionGroupDetailsType)
  })
});

const GameIndexType = new GraphQLObjectType({
  name: 'GameIndex',
  fields: () => ({
    id: { type: GraphQLID },
    move: { type: NameURLType },
    version_group_details: new GraphQLList(VersionGroupDetailsType)
  })
});

const VersionGroupDetailsType = new GraphQLObjectType({
  name: 'VersionGroupDetails',
  fields: () => ({
    level_learned_at: { type: GraphQLInt },
    move_learn_method: { type: NameURLType },
    version_group: { type: NameURLType },
  })
})

const SpritesType = new GraphQLObjectType({
  name: 'Sprites',
  fields: () => ({
    back_default: { type: GraphQLString },
    back_female: { type: GraphQLString },
    back_shiny: { type: GraphQLString },
    back_shiny_female: { type: GraphQLString },
    front_default: { type: GraphQLString },
    front_female: { type: GraphQLString },
    front_shiny: { type: GraphQLString },
    front_shiny_female: { type: GraphQLString },
    other: { type: SpritesOtherType }
  })
})

const SpritesOtherType = new GraphQLObjectType({
  name: 'SpritesOther',
  fields: () => ({
    dream_world: { type: SpritesDreamWorldType },
    home: { type: SpritesHomeType },
    officialArtwork: { type: SpritesOfficialArtType },
  })
})

const SpritesDreamWorldType = new GraphQLObjectType({
  name: 'SpritesDreamWorld',
  fields: () => ({
    front_default: { type: GraphQLString },
    front_female: { type: GraphQLString },
  })
})

const SpritesHomeType = new GraphQLObjectType({
  name: 'SpritesHome',
  fields: () => ({
    front_default: { type: GraphQLString },
    front_female: { type: GraphQLString },
    front_shiny: { type: GraphQLString },
    front_shiny_female: { type: GraphQLString },
  })
})

const SpritesOfficialArtType = new GraphQLObjectType({
  name: 'SpritesOfficialArt',
  fields: () => ({
    front_default: { type: GraphQLString },
  })
})

const StatsType = new GraphQLObjectType({
  name: 'Stats',
  fields: () => ({
    base_state: { type: GraphQLInt },
    effort: { type: GraphQLInt },
    stat: { type: NameURLType }
  })
})

const PokemonTypeType = new GraphQLObjectType({
  name: 'PokemonType',
  fields: () => ({
    slot: { type: GraphQLInt },
    type: { type: NameURLType }
  })
})

const NameURLType = new GraphQLObjectType({
  name: 'NameURL',
  fields: () => ({
    name: { type: GraphQLString },
    url: { type: GraphQLString },
  })
})

export default PokemonType