import { Category } from '../Models/CategoryModel.js'
import express from 'express'

const categoryAdder = express.Router()


categoryAdder.post('/addCategory', async (req, res, next)=>{

    const {categoryName, collection, delivery, inStock, images = "test image"} = req.body

    const createCategory = await Category.create({
        categoryName,
        delivery,
        collection,
        stockIn : inStock,
        images
    })

    if(createCategory){
        return res.status(200).json({msg : "Category Created"})
    }else{
        res.status(400).json({msg : "Error creating"})
    }

})



export default categoryAdder