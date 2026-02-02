import express, { text } from 'express'
import nodemailer from 'nodemailer'
import { Usermodel } from '../Models/Usermodel.js'


export const sendMail = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port : Number(process.env.MAIL_PORT),
    secure : false,
    auth : {
        user : process.env.MAIL_USER,
        pass : process.env.MAIL_PASSWORD
    }
})






const mailOption = (email, username, newPass)=> {

    return{

            from : `Restaurant App <${process.env.MAIL_USER}>`,
            to : email,
            text : `${username}, you have signed up with us !`,
            subject : 'Welcome to Restaurant App as a client',
            html : ` 
        <div>
            <h1 style={{color : "black"}}>Hello there !</h1>
            <h3 style={{color : "black"}}>The username is your email id to login as a client</h3>
            <h3 style={{color : "black"}}> ${newPass} : is your password to login with us</h3>
            <p style={{color : "black"}}>You can later change the password in the portal</p>
            <p style={{color : "black"}}>Your's Sincerely - The Solo Dev </p>
        </div>
    `
    }

}


const mailToUser = express.Router()

    mailToUser.post('/new/signup', async (req, res)=>{
        const {username, email, deal} = req.body
        console.log(username,email,deal)
        const newPass = username.slice(0, 5) + '@123'

        if(!username || !email ||  !deal){
            return res.status(400).json({ok : false, msg : "Did not receive data"})
        }

        if(username && email && deal){

            const findUsernameAlready = await Usermodel.findOne({email : email})
            
            if(findUsernameAlready){
                return res.status(400).json({msg : "User already exists !!"})
            }

            const createNewClient = await Usermodel.create({
                name : username,
                email : email,
                deal : deal,
                password : newPass,
                role : "Admin"
            })

            if(createNewClient){
                await sendMail.sendMail(mailOption(email, username, newPass))
                return res.status(200).json({ok : true})
            }
        }

        return res.status(500).json({msg : "Invalid user data"})

    })




export default mailToUser