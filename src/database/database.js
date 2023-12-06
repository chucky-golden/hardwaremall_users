const mongoose = require('mongoose')

const databaseConnection = (dbURI) => {
    
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })  
}

module.exports = databaseConnection