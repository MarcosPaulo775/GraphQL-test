const { GraphQLServer } = require('graphql-yoga');

const typeDefs = require('./typeDefs/index');
const resolvers = require('./resolvers/index');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'tizza';

mongoose.connect(url + '/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => console.log('Server is running on localhost:4000'));
