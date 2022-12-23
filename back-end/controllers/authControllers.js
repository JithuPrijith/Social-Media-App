const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {

    registerUser: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = new User({
                username,
                email,
                password: hashedPassword
            })
            await user.save()
            res.status(200).json(user)

        } catch (error) {
            res.status(500).json(error)
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            let logingUser = await User.findOne({ email: email });
            !logingUser && res.status(404).json("user not found")

            const checkPassword = await bcrypt.compare(password, logingUser.password);
            !checkPassword && res.status(400).json("wrong password");
            res.status(200).json(logingUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}