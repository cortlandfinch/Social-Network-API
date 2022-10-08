const router = require('express').Router();

// get all users
// get a single user by its _id and populated thought and friend data
// post a new user
// put to update a user by its _id
// delete to remove user by its _id
// add and delete a friend

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/user-controller");

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).post(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);



module.exports = router;