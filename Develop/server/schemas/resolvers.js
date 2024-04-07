// User resolvers 
const { User } = require('../models/User');
const { Book } = require('../models/Book');
const { Index } = require('../models/index');

const resolvers = {
    Query: {
        users: async function() {
            return await User.find();
        },
        user: async function(_, { userId }){
            return await User.findByID(userId);
        },
        books: async function() {
            return await Book.find();
        },
        book: async function(_, { bookID }) {
            return await Book.findByID(bookIDookID);
        },
    },
Mutation: {
    createUser: async function(_, {username, email, password}) {
        return await user.create({username, email, password})
    },
    createBook: async (_, { input }) => {
        const { authors, description, bookId, image, link, title } = input;
        return await Book.create({ authors, description, bookId, image, link, title });
      },
 }
}

module.exports = resolvers;
