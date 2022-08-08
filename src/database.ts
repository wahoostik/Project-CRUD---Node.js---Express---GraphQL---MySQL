import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './GraphQL/Entities/UserEntities';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: 3306,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database:  process.env.DATABASE,
    logging: true,
    synchronize: false, // true, lors de la création de la BDD
    entities: [User]
});