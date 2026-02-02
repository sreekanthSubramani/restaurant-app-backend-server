import express from 'express'
const userRoute = express.Router()

userRoute.post('/new/user', (req, res)=>{
    const {username, password} = req.body

    



})







module.exports = userRoute;