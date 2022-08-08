import { GraphQLString } from 'graphql';
import { UserType } from '../TypeDefinition/UserType';
import { User } from '../Entities/UserEntities';

export const CREATE_USER = {
    type: UserType,
    args: {
        firstname: { type: GraphQLString},
        lastname: { type: GraphQLString},
        adress: { type: GraphQLString},
        city: { type: GraphQLString},
        country: { type: GraphQLString},
        email: { type: GraphQLString},
        password: { type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { firstname, lastname, adress, city, country, email, password } = args;
        await User.insert({ firstname, lastname, adress, city, country, email, password });
        return args;
    },
};