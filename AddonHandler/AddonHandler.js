import { TheAddonModel } from '../Models/Menu Models/AddonModel.js'
import express from 'express'
const addonRouter = express.Router()



addonRouter.post('/add/addons/group', async (req, res, next)=>{

    const {addOnTitle, addOnHeading, addOnName, addOnPrice} = req.body

    try{
        const addonGroupAdder = await TheAddonModel.create({
            addOnTitile : addOnTitle,
            addOnDetails : [
                {
                    addOnHeading : addOnHeading,
                    addOns : [
                        {
                            addOnName : addOnName,
                            addOnPrice : addOnPrice
                        }
                    ]
                }
            ]
        })

        if(!addonGroupAdder){
            return res.status(500).json({msg : "Nope ! unable to do"})
        }

        return res.status(201).json({msg : addonGroupAdder})

    }catch(e){
        console.log(e)
    }

})


addonRouter.post('/add/addons/heading', async (req, res, next)=>{

    const {addOnTitle, addOnHeading, addOnName, addOnPrice} = req.body
    console.log(req.body, 'getting to backend')

    const updateHeading = await TheAddonModel.updateOne({
        addOnTitile : addOnTitle,
    },
    {
        $push : {
            addOnDetails : {
                addOnHeading : addOnHeading,
                addOns : [
                    {
                        addOnName : addOnName,
                        addOnPrice : addOnPrice
                    }
                ]
            }
        }
    })

    if(!updateHeading){
        return res.status(400).json({msg : "Nope this is unable to be pushed"})
    }

    return res.status(201).json({msg : "This is done !!"})
})


addonRouter.post('/add/addons', async (req, res, next)=>{

    const {addOnTitle, addOnHeading, addOnName, addOnPrice} = req.body

    const updateOnlyAddons = await TheAddonModel.updateOne({
        addOnTitile : addOnTitle,
        "addOnDetails.addOnHeading" : addOnHeading,
    },
    {$push : {
        "addOnDetails.$.addOns" : {
            addOnName : addOnName,
            addOnPrice : addOnPrice
        }
    }}
)

    if(!updateOnlyAddons){
        return res.status(400).json({msg : "Nope not updated"})
    }

    return res.status(201).json({msg : "Done updating !!"})

})






export default addonRouter