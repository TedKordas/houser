require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    controller = require('./controller.js');
const PORT = 2455;
const app = express();

app.use( express.static( `${__dirname}/../build` ) );

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
app.post('/api/post/property', controller.postProp)
app.get('/api/get/properties/:id', controller.getProps)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))