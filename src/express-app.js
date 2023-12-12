const express = require('express')
const cors = require('cors')
const multer = require('multer');
const bodyParser = require('body-parser');
const basicRoutes = require('./routes/basicRoutes')

module.exports = async (app) => {
    app.use(cors())

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    // const upload = multer();
    // app.use(upload.array());

    app.use('', basicRoutes)
    
}