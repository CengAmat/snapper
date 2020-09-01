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
    Mutation,
    Subscription: {
        sayi: {
            subscribe: (parent, args, { pubsub }) => {
                let sayi = 5;

                setInterval(() => {
                    sayi += 1;
                    pubsub.publish('sayi', {
                        sayi
                    });
                }, 3000);

                return pubsub.asyncIterator('sayi');
            }
        }
    }
}