import mongoose from "mongoose";
import {Schema, model} from 'mongoose'


const Subcats = new Schema({
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    subCategory : {
        type : String,
        required : true,
        unique : true,
        index : true
    }
})

export const Subcategory = model('Subcategory', Subcats)