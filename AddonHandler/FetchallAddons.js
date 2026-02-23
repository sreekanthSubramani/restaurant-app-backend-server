import express from 'express'
import { TheAddonModel } from '../Models/Menu Models/AddonModel.js'

const showAllAddons = express.Router()


showAllAddons.get('/show/allAddons', async (req, res)=>{
    
    try{
        const fecthAllAddons = await TheAddonModel.find().lean()
        if(fecthAllAddons){
            return res.status(200).json({msg : fecthAllAddons})
        }
    }catch(e){
        return res.status(500).json({msg : "No addons to show"})

    }
})



export default showAllAddons