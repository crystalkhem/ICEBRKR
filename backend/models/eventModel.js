import mongoose from 'mongoose';

const Schema = mongoose.Schema

const eventSchema = new Schema( {
    name: {
        require: true,
        type: String
    },    date: {
        require: true,
        type: String
    },   time: {
        require: true,
        type: String
    },    category: {
        require: true,
        type: String
    },    description: {
        require: true,
        type: String
    }
}, { timestamps: true})

let Events = mongoose.model('Events', eventSchema)

export default Events;