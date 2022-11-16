import mongoose from 'mongoose';

const Schema = mongoose.Schema

const profileSchema = new Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        require: true,
        type: String
    },    age: {
        require: true,
        type: String
    },   major: {
        require: true,
        type: String
    },    bio: {
        require: true,
        type: String
    }
}, { timestamps: true})

let Profiles = mongoose.model('Profiles', profileSchema)

export default Profiles;