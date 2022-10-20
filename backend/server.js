const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())



//connect to data base
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('sucessfully connected to mongoDB'))
    }) .catch((error) => console.log(error))

