import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unqiue: true
    },
    password: {
        type: String,
        required: true,
    },
    categories: {
        type: String
    },
    image: {
        type: String
    },
    dob: {
        type: Date,
    },
    // createdAt: {
    //     type: Date,
    //     default: new Date(),
    // }
})

userSchema.statics.signup = async function(email, password, firstName, lastName, categories, image, dob) {
    //validate

    if (!email || !password || !firstName || !lastName) {
        throw Error('All fields must be filled')
    }

// will change to uncg validator later specifically
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid uncg address')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash, firstName, lastName, categories, image, dob})

    return user
}



userSchema.statics.login = async function(email, password) {
    
    if (!email || !password) {
        throw Error('All fields must be filled')
    }


    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Incorrect email.')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


let User = mongoose.model('User', userSchema);

export default User;