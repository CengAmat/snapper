// query resolvers
const Query = require('./query/Query');
const Snap = require('./query/Snap');
const User = require('./query/User');


// mutation resolvers
const Mutation = require('./mutation/index');


module.exports = {
    Query,
    Snap,
    User,
    Mutation
}