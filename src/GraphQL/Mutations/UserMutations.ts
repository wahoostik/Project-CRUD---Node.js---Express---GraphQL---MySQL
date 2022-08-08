import { GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../TypeDefinition/UserType';
import { User } from '../Entities/UserEntities';
import { MessageType } from '../TypeDefinition/MessageType';

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

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        if (id === undefined || null) {
            throw new Error('L\'utilisateur n\'a pas été trouvé');
        }
        await User.delete(id);
        return { successful: true, message: 'Utilisateur supprimé avec succès' };
    },
};

export const UPDATE_DATA = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString},
        lastname: { type: GraphQLString},
        adress: { type: GraphQLString},
        city: { type: GraphQLString},
        country: { type: GraphQLString},
        email: { type: GraphQLString},
        password: { type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        const user = await User.findOne({ where: { id }});
        console.log('id: ' + id);
        
        if (!user) {
            throw new Error('L\'utilisateur n\'a pas été trouvé');
        }
        await User.update(id, args);
        console.log('Modification réussi');
        // return args;
        return { successful: true, message: 'Modification réussi' };
    },
};