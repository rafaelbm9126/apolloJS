import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolve';

const schema = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
  }

  type Query {
    author(id: Int!): Author
    AllAutors: [Author]
  }

  type Mutation {
    newAutor (
      id: Int!
      firstName: String!
      lastName: String!
    ): Author
  }
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});