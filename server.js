import Express from 'express';

import graphqlExpress from 'express-graphql';

import cors from 'cors';

import bodyParser from 'body-parser';

import {WDServer} from './webpack.config';

import Schema from './data/schema';

const graphQLServer = Express('*',cors());

graphQLServer.use('/', bodyParser.json(), graphqlExpress({
  schema: Schema,
  context: {},
  graphiql: true,
}));

graphQLServer.listen (8080,() => { console.log('Graphql corre.!'); });

WDServer.use("/", Express.static("public"));

WDServer.listen(3000,() => {
  console.log('Webpack-Dev-Server corre.!');
});
