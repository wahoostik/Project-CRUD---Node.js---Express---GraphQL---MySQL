import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import chalk from 'chalk';
import 'dotenv/config';

const server = express();
const port = process.env.PORT || 3000;

server.get('/', (request, response) => {
    response.json({ message: 'Welcome !!'});
});

// Activation du serveur
server.listen(port, () => {
    console.log(chalk.blue(`Serveur Express-TypeScript en marche sur http://localhost:${port}`));
});