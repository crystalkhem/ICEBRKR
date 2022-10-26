const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user')
const eventRoutes = require('./routes/events')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRoutes)
app.use('/events', eventRoutes)



//connect to data base
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('sucessfully connected to mongoDB'))
    }) .catch((error) => console.log(error))

