const User = require('./User');

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id)
    },

    Mutation: {
        createUser: (_, { fullname, email, attributes }) => User.create({ fullname, email, attributes }),
    },


};