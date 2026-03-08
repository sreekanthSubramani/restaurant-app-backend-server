import {TheAddonModel} from '../Models/Menu Models/AddonModel.js'
import { Items } from "../Models/Menu Models/ItemModel.js";
import express from 'express'



const addOnLinker = express.Router()


addOnLinker.post('/link/this', async (req, res) => {
  try {
    const { addOnId, item } = req.body

    const updatedItem = await Items.findOneAndUpdate(
      { name: item },
      { $set: { addOnlink: addOnId } },
      { new: true }
    )

    console.log("UPDATED:", updatedItem)

    if (!updatedItem) {
      return res.status(404).json({ msg: "Item not found or not updated" })
    }

    return res.status(200).json(updatedItem)

  } catch (e) {
    console.log(e)
    return res.status(500).json({ msg: "Server error" })
  }
})




addOnLinker.post('/show/addon', async (req, res)=>{
  try{
    const {adTitle} = req.body

    const findTotalAddon = await TheAddonModel.findOne({addOnTitile : adTitle})
    console.log(findTotalAddon)
    return res.status(200).json({msg : findTotalAddon})
    
  }catch(e){
    console.log(e)
  }
})



export default addOnLinker      