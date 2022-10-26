const mongoose = require('mongoose')
const bcrpyt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
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
        type: [String]
    }
})

userSchema.statics.signup = async function(email, password) {
    //validate

    if (!email || !password) {
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

    const salt = await bcrpyt.genSalt(10)
    const hash = await bcrpyt.hash(password, salt)

    const user = await this.create({email, password: hash})

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

    const match = await bcrpyt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)