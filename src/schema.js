const { gql } = require('apollo-server');

const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  
  type Query {
    users: [User]
    user(id: ID!): User
  }
  
  type Mutation {
    createUser(name: String!, email: String!): User
  }
\`;

const resolvers = {
  Query: {
    users: () => [],
    user: (_, { id }) => ({ id, name: 'User', email: 'user@example.com' })
  },
  Mutation: {
    createUser: (_, { name, email }) => ({
      id: Date.now().toString(),
      name,
      email
    })
  }
};

module.exports = { typeDefs, resolvers };
