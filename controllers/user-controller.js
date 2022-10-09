const { user } = require('../models');

// get all Users
const usersController = {
    getAllUsers(req, res) {
        user.find({})
        .populate({
            path: 'thoughts',
            select: '__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // get user by id
    getUserById({ params }, res) {
        user.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    createUser({ body }, res) {
        user.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    updateUser({ params, body }, res) {
        user.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    deleteUser({ params }, res) {
        user.findOneAndDelete({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }
};

module.exports = usersController;