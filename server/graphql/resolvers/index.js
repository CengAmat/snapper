// query resolvers
const Query = require('./querys/Query');
const Snap = require('./querys/Snap');
const User = require('./querys/User');


// mutation resolvers
const Mutation = require('./mutations/index');

// subscription resolvers
const Subscription = require('./subscriptions/index');


module.exports = {
    Query,
    Snap,
    User,
    Mutation,
    Subscription
}