const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const basicRoutes = require('./routes/basicRoutes')

module.exports = async (app) => {
    app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('', basicRoutes)
    
}