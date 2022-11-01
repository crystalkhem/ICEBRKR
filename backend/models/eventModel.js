import mongoose from 'mongoose';

const Schema = mongoose.Schema

const eventSchema = new Schema( {
    name: {
        required: true,
        type: String
    },    date: {
        required: true,
        type: Date
    },   time: {
        required: true,
        type: String
    },    category: {
        required: true,
        type: String
    },    description: {
        required: true,
        type: String
    }
}, { timestamps: true})

let Events = mongoose.model('Events', eventSchema)

export default Events;