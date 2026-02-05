import { Subcategory } from '../Models/SubCategoryModel.js'
import { Category } from '../Models/CategoryModel.js'
import express from 'express'

const subCatHandler = express.Router()


subCatHandler.post('/add/SubCat', async (req, res, next)=>{
    try{
        const { category, subCategory, online} = req.body

        const categoryDoc = await Category.findOne({categoryName : category})

        if(!categoryDoc){
            return res.status(400).json({msg : "Category not found !!"})
        }

        const addSubCategory = await Subcategory.create({
            category : categoryDoc._id,
            subCategory : subCategory,
            online : online
        })

        if(!addSubCategory){
            return res.status(500).json({msg : "Subcategory not added"})
        }

        return res.status(201).json({msg : "Subcategory has been added"})

    }catch(e){  
        console.log(e)
    }
})

 



export default subCatHandler