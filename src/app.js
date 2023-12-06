const express = require('express')
const databaseConnection = require('./database/database')
const { PORT, dbURI } = require('./config')
const expressApp = require('./express-app')

const app = express()

// await databaseConnection(dbURI)

expressApp(app)

app.listen(PORT, () => {
    console.log(PORT);
    console.log('user running...')
})
.on('error', (err) => {
    console.log(err)
    process.exit()
})
