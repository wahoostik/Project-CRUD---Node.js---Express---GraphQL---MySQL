import express from 'express';
import chalk from 'chalk';
import 'dotenv/config';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './GraphQL/schema';
import { AppDataSource } from './database';

const port = process.env.PORT || 3000;

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (request, response) => {
    response.json({ message: 'Welcome !!'});
});

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true})); // permet d'utiliser GraphiQL sur le localhost

// Connexion avec la BDD
AppDataSource.initialize()
    .then(() => {
        console.log(chalk.green('Connecté à la base de données MySQL !'));
    })
    .catch((error) => {
        console.log(chalk.red('Erreur de connexion !', error));
    });

// Activation du serveur
server.listen(port, () => {
    console.log(chalk.blue(`Serveur Express-TypeScript en marche sur http://localhost:${port}`));
});