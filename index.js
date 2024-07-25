const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define the schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Create an Express application
const app = express();

// Apply the Apollo GraphQL middleware to the Express server
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
