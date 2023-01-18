const router = require('express').Router();
const {updateUser,deleteUser,getUser, followUser,unfollowUser, getFriendsController}  = require('../controllers/userControllers');

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

// get friends
router.get('/getfriends/:userId',getFriendsController)


module.exports = router;