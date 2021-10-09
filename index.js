const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

mongoose.connect('mongodb://localhost:27017/project').
  catch(error => handleError(error));

// Or:


const typeDefs = gql`
  type Book {
    title: String
    author: String
  }


  type Query {
    books: [Book]
  }
`;
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
const resolvers = {
    Query: {
      books: () => books,
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});