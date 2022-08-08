import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID},
        firstname: { type: GraphQLString},
        lastname: { type: GraphQLString},
        adress: { type: GraphQLString},
        city: { type: GraphQLString},
        country: { type: GraphQLString},
        email: { type: GraphQLString},
        password: { type: GraphQLString},
        createdat: { type: GraphQLString},
    }),
});