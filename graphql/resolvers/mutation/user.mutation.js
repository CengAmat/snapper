const bcrypt = require('bcrypt');
const token = require('../../../helpers/token');

module.exports = {
    createUser: async (parent, { data: { username, password }}, { User }) => {
        const user = await User.findOne({ username });

        if (user) {
            throw new Error('User already exists');
        }

        return await new User({
            username,
            password
        }).save();
    },

    signInUser: async (parent, { data: { username, password}}, { User }) => {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('User does not exist!');
        }
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Wrong Password');
        }

        return { token: token.generate(user, '1hr')};

    }
};