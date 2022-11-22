import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.js'
import eventRoutes from './routes/events.js'
import profileRoutes from './routes/profiles.js'
import cors from 'cors';
import { Server } from "socket.io";


const app = express()
app.use(express.json({ limit: "50mb", extended: true }));
app.use(cors())


app.use('/api/user', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/profiles', profileRoutes)



//connect to data base
mongoose.connect(process.env.URI)
    .then(() => {
        const server = app.listen(process.env.PORT, () => console.log('sucessfully connected to mongoDB on port', process.env.PORT))
        const io = new Server(server, {
            cors: {
              origin: '*',
            }
          })

        io.on('connection', socket => {
            console.log('hello we made it', socket.id)

            socket.on('send_message', (data) => {
              console.log(data)
              socket.broadcast.emit('get_message', data)
            })
        })


    }) .catch((error) => console.log(error))


