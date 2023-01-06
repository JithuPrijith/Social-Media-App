const router = require('express').Router();
const User = require('../models/user')
const {updateUser,deleteUser,getUser, followUser,unfollowUser}  = require('../controllers/userControllers');

// updating user data
router.put('/:id',updateUser)

// deleting user
router.delete('/:id',deleteUser)

// get a user
router.get('/',getUser)

// follow user
router.put('/follow/:id',followUser)
// unfollow user
router.put('/unfollow/:id',unfollowUser)


module.exports = router;