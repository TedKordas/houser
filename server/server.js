require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    controller = require('./controller.js')
    propController = require('./propController.js');

const PORT = 3005;
const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    console.log("Connected to DB")
    app.set('db', db)
})


app.post('/api/post/user', controller.createUser)
app.get('/api/get/user/:username', controller.getUser)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))