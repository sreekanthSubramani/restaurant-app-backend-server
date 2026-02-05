import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const CoreAddonModel = new Schema({
    addOnName : {
        type : String,
        required : true
    },
    addOnPrice : {
        type : Number,
        required : true
    }
}, {_id : false})


const CoreHeading = new Schema({
    addOnHeading : {
        type : String,
        required : true
    },
    addOns : {
        type : [CoreAddonModel],
        default : []
    }
}, {_id : false})


const ActualAddOnModel = new Schema({
    addOnTitile : {
        type : String,
        required : true,
        index : true
    },
    addOnDetails : {
        type : [CoreHeading],
        default : []
    }
})

export const TheAddonModel = model('AddonModel', ActualAddOnModel)
