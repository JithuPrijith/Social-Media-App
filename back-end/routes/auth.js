const router = require('express').Router();
const {registerUser,
loginUser}  = require('../controllers/authControllers')

// register user
router.post('/register',registerUser)

// login user
router.post('/login',loginUser)

module.exports = router;