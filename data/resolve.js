import { find, filter } from 'lodash';

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const resolveFunctions = {
  Query: {
    author(_, { id }) {
      return find(authors, { id: id });
    },
    AllAutors: (_,{}) => {
      return authors;
    },
  },
  Mutation: {
    newAutor(_, { id, firstName, lastName }) {
      authors.push({ id, firstName, lastName });
      return { id, firstName, lastName };
    },
  },
};

export default resolveFunctions;
