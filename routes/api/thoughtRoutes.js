const router = require('express').Router();
const {
    getThoughts,
    getIndividualThought,
    createThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getIndividualThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;