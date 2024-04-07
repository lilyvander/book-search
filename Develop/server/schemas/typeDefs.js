// schemas/typeDefs.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
 }

  type Book {
    _id: ID!
    title: String!
    authors: [String!]!
    description: String!
    bookId: String!
    image: String
    link: String
  }

  type Query {
    users: [User!]!
    user(userId: ID!): User
    books: [Book!]!
    book(bookId: ID!): Book
    indexes: [Index!]!
    index(indexId: ID!): Index
    # Add more query types as needed
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createBook(input: BookInput!): Book
  }

  input BookInput {
    title: String!
    authors: [String!]!
    description: String!
    bookId: String!
    image: String
    link: String
    # Add more fields as needed
  }
`;

module.exports = typeDefs;
