import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDefinition/UserType';
import { User } from '../Entities/UserEntities';

import { AppDataSource } from '../../database';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return User.find();
        // return AppDataSource.manager.find(User);
    },
};