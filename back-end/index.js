const express = require('express');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv')
const helmet = require('helmet')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')


dotenv.config()
mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true
}, () => { console.log("mongo connected"); })

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/post', postRoute);


app.listen(4200, () => {
    console.log("server connected to 4200");
})