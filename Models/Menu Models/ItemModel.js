import mongoose from "mongoose";
import {Schema, model} from 'mongoose'


const Itemmodel = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    },
    subcategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subcategory",
        required : true
    }

})


export const Items = model('Items', Itemmodel)
