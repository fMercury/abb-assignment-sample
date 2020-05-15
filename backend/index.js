'use strict';
const { createServer } = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { execute, subscribe } = require('graphql');

const { SubscriptionServer } = require('subscriptions-transport-ws');
const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

// types definition
const typeDefs = ` 

`;

// resolvers definition
const resolvers = {
};

// schema definition
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

// middlewares
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:4000/subscriptions`
}));

const ws = createServer(app);

// template for subscriptions
ws.listen(4000, () => {
    console.log('Graphic Interface http://localhost:4000/graphiql');

    new SubscriptionServer({
        execute,
        subscribe,
        schema
    }, {
        server: ws,
        path: '/subscriptions',
    });

});

