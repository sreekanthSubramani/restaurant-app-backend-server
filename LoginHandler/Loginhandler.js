import express from 'express'
import { Usermodel } from '../Models/Usermodel.js'

const loginHandler = express.Router()


loginHandler.post('/login/client', async (req, res)=>{

    const {username, password} = req.body

    if(!username || !password){
        return res.status(404).json({msg : "No valid credentials"})
    }

    const userToLogin  = await Usermodel.findOne({
        email : username
    })

    if(!userToLogin){
        return res.status(403).json({msg : "No users signed in! Please sign up"})
    }

    //after username and password matched

    if(userToLogin.password == password){
        return res.status(201).json({msg : "Please enter"})
    }


})




export default loginHandler