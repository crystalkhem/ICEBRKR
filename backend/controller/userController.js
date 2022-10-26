const express = require('express')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//controller functions
//login user
const loginUser = async (req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const registerUser = async (req,res) => {
    const {email, password, categories} = req.body
    
    try {
        const user = await User.create({email, password, categories})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { loginUser, signupUser, registerUser }