const router = require('express').Router();
const {
    getUsers,
    getIndividualUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router
    .route('/:courseId')
    .get(getIndividualUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;