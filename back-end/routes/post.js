const router = require('express').Router();
const User = require('../models/user');
const {createPost,updatePost,deletePost,likePost,getPost,getTimeline, getUserPost} = require('../controllers/postControllers')

router.post('/',createPost)

router.put('/:id',updatePost)

router.delete('/:id',deletePost)

router.put('/:id/like',likePost)

router.get('/:id',getPost)

router.get('/timeline/:userId',getTimeline)

router.get('/profile/:userId',getUserPost)

module.exports = router;