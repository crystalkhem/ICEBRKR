import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.js'
import eventRoutes from './routes/events.js'
import profileRoutes from './routes/profiles.js'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/user', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/profiles', profileRoutes)



//connect to data base
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('sucessfully connected to mongoDB on port', process.env.PORT))
    }) .catch((error) => console.log(error))

