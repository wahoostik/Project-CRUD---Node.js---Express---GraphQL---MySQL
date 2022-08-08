import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_USERS } from './Queries/UserQueries';
import { CREATE_USER, DELETE_USER } from './Mutations/UserMutations';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});