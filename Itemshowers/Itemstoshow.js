import express from 'express'
import { Items } from '../Models/Menu Models/ItemModel.js'


const itemShowHandler = express.Router()


itemShowHandler.get('/show/items', async (req ,res)=>{
    try{
        const showItems = await Items.find().populate('category','categoryName').lean()
        if(showItems){
            return res.status(200).json({msg : showItems})
        }

        return res.status(500).json({msg : "oopsies"})
    }catch(e){
        console.log(e)
    }
})




export default itemShowHandler