require('dotenv').config({path: __dirname + '/.env'})

const PORT = process.env.PORT
const dbURI = process.env.DBURI

module.exports = {
    PORT,
    dbURI
}