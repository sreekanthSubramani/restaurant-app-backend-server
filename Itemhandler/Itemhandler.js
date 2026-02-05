import express from 'express'
import { Items } from '../Models/Menu Models/ItemModel.js'
import { Category } from '../Models/CategoryModel.js'
import { Subcategory } from '../Models/SubCategoryModel.js'

const itemHandlers = express.Router()


itemHandlers.post('/all/Item', async (req, res, next)=>{
    
    const {categoryNameItem,subCatItSelected,itemNameBlock,itemPriceBlock} = req.body

    
    try{
        const findCatinDB = await Category.findOne({categoryName : categoryNameItem})
        const findSubIteminDB = await Subcategory.findOne({subCategory : subCatItSelected})


        const itemUpdater  = await Items.create({
            name : itemNameBlock,
            price : itemPriceBlock,
            category : findCatinDB._id,
            subcategory : findSubIteminDB._id
        })

        if(!itemUpdater){
            return res.status(500).json({msg : 'Item cannot be updated', data : itemUpdater})
        }

        return res.status(201).json({msg : "Item is updated"})

    }catch(e){
        console.log(e)
    }
})





export default itemHandlers