import chalk from 'chalk';
import 'dotenv/config';
import { createConnection } from 'typeorm';
/*
const main = async () => {
    await createConnection({
        type: 'mysql',
        database: process.env.DATABASE,
        username: process.env.USER,
        password: process.env.PASSWORD,
        logging: true,
        synchronize: false,
        // entities: [Users],
    });
};

main().catch((error) => {
    if (error) {
        console.log(chalk.red('Erreur de connexion !', error));
    }
    console.log(chalk.green('Connecté à la base de données MySQL !'));
});
*/
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: 3306,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database:  process.env.DATABASE,
    logging: true,
    synchronize: false,
    entities: []
});

AppDataSource.initialize()
    .then(() => {
        console.log(chalk.green('Connecté à la base de données MySQL !'));
    })
    .catch((error) => {
        console.log(chalk.red('Erreur de connexion !', error));
    });