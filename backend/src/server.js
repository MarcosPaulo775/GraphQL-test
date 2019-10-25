const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const MongoClient = require('mongodb').MongoClient;
const mongoose  = require('mongoose');
const dbName = 'tizza';
const url = 'mongodb://localhost:27017';

mongoose.connect(url + '/' + dbName , {
    useNewUrlParser: true
})
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();