const router = require('express').Router();

// get to get all thoughts
// get to get a single thought by its _id
// post to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// put to update a thought by its _id
// delete to remove a thought by its _id
// post to create a reaction stored in a single thought's reactions array field
// delete to pull and remove a reaction by the reaction's reactionId value

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    // addReaction,
    // deleteReaction
} = require("../../controllers/thought-controller");

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
// router.route('/:thoughtId/reactions').post(addReaction);
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);



module.exports = router;