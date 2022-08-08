import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDefinition/UserType';
import { User } from '../Entities/UserEntities';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return User.find();
    },
};