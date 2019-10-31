const users = require('../data/schemas/user.schema');
const bcrypt = require('bcrypt');


// (root, args, context, info) => {}
// options:{sort: String, order:Int, page:Int, limit:Int, search:String}
const userResolvers = {
    Query: {
        listUsers: (_, { options }) => {
            let query = {};
            let sort = {};
            let skip = options.page * options.limit;
            let limit = options.limit;

            sort[options.sort] = options.order;

            if (options.search && options.search !== '') {
                query = {
                    $or: [
                        { username: { $regex: '.*' + options.search + '.*', $options: 'i' } },
                        { fullname: { $regex: '.*' + options.search + '.*', $options: 'i' } },
                        { email: { $regex: '.*' + options.search + '.*', $options: 'i' } },
                    ]
                }
            }

            return users.find(query).sort(sort).limit(limit).skip(skip);
        },

        getAllUsers: () => users.find({}),
        getUserById: (_, { _id }) => users.findOne({ _id })
    },
    Mutation: {

        createUser: (_, { username, fullname, password, email, permissions, attributes, city, empresa, home, type, terceiro }) => {

            bcrypt.hash(password, 10, (error, hash) => {

                if (hash) {
                    let user = {
                        username,
                        fullname,
                        password: hash,
                        email,
                        permissions,
                        attributes,
                        city,
                        empresa,
                        home,
                        type,
                        terceiro
                    };

                    return users.create({ user });
                }
            });
        }
    }
}

module.exports = userResolvers;