import express from 'express'
import { Category } from '../Models/CategoryModel.js'
const sendCat = express.Router()


sendCat.get('/send/category', async (req , res)=>{
    try{    
        const sendAllCats = await Category.find().lean()
        if(sendAllCats){
            return res.status(200).json({msg : sendAllCats})
        }

        return res.status(400).json({msg : 'nope ntg happened!'})
    }catch(e){
        console.log(e, 'error here')
    }
})



export default sendCat