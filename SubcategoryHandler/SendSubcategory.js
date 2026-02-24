import express from 'express'
import { Subcategory } from '../Models/SubCategoryModel.js'
const sendSubCat = express.Router()


sendSubCat.get('/send/subCat', async (req, res)=>{
    try{    
        const sendSubCats = await Subcategory.find().populate("category", "categoryName").lean()
        if(sendSubCats){
            return res.status(200).json({msg : sendSubCats})
        }
        return res.status(500).json({msg : "No sub cats found"})
    }catch(e){
        console.log(e)
    }
})





export default sendSubCat