const rnc = require('../data/schemas/rnc.schema');

// (root, args, context, info) => {}
const rncResolvers = {
    Query: {
        getAllRnc: () => rnc.find({}),
    },
    Mutation: {
        createRnc: (_, { name }) => rnc.create({ name })
    }
}

module.exports = rncResolvers;