const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    updateUser: async (req, res) => {
        try {
            if (req.body.userId === req.params.id || req.body.isAdmin) {
                if (req.body.password) {
                    const salt = await bcrypt.genSalt(10)
                    req.body.password = await bcrypt.hash(req.body.password, salt)
                }
                const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
                res.status(200).json("Account updated")
            }
        } catch (error) {
            return res.status(500).json(error);
        }

    },

    deleteUser: async (req, res) => {
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            try {
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Account has been deleted");
            } catch (error) {
                return res.status(500).json(err);
            }
        } else {
            return res.status(403).json("You can delete only your account!");
        }
    },
    getUser: async (req, res) => {
        const userName = req.query.username;
        const userId = req.query.userId;
        try {
            const user = userId ? await User.findById(userId) : await User.findOne({ username: userName })
            const { password, updatedAt, ...other } = user._doc;
            res.status(200).json(other);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    followUser: async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);
                data = user.followers.includes(req.body.userId)
                console.log(data);
                if (!user.followers.includes(req.body.userId)) {
                    await user.updateOne({ $push: { followers: req.body.userId } });
                    await currentUser.updateOne({ $push: { followings: req.params.id } });
                    res.status(200).json("user has been followed");
                } else {
                    res.status(403).json("you allready follow this user");
                }
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("you cant follow yourself");
        }
    },
    unfollowUser: async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);
                if (user.followers.includes(req.body.userId)) {
                    await user.updateOne({ $pull: { followers: req.body.userId } });
                    await currentUser.updateOne({ $pull: { followings: req.params.id } });
                    res.status(200).json("user has been unfollowed");
                } else {
                    res.status(403).json("you allready unfollow this user");
                }
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("you cant unfollow yourself");
        }
    },
    getFriendsController: async (req, res) => {
        try {
            const user = await User.findById(req.params.userId)
            const friends = await Promise.all(
                user.followings.map(friendId => {
                    return User.findById(friendId)
                })
            )
            let friendList = []
            friends.map((friend) => {
                const { _id, username, profilePicture } = friend
                friendList.push({ _id, username, profilePicture })
            })
            res.status(200).json(friendList)
        } catch (error) {
            res.status(500).json(err);
        }
    }


}