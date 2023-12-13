const express = require('express')
const cors = require('cors')
const basicRoutes = require('./routes/basicRoutes')

module.exports = async (app) => {
    app.use(cors())

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('', basicRoutes)
    
}