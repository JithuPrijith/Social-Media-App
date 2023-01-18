const express = require('express');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv')
const helmet = require('helmet')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const multer = require('multer')
const path = require('path')

dotenv.config()
mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true
}, () => { console.log("mongo connected"); })

app.use('/images', express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    },
});
const upload = multer({ storage })
app.post('/upload', upload.single("file"), (req, res) => {
    console.log(req.body);
    try {
        return res.status(200).json('file upload successfully')
    } catch (error) {
        console.log(error);
    }
})

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/post', postRoute);


app.listen(4200, () => {
    console.log("server connected to 4200");
})