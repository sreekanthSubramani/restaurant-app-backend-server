import {Schema, model} from 'mongoose'


const CategorySchema = new Schema({
    categoryName : {
        type : String,
        required : true,
        unique : true
    },
    collection : {
        type : Boolean,
        required : true
    },
    delivery : {
        type : Boolean,
        required : true
    },
    images : {
        type : String,
        required : true
    },
    stockIn : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
})


export const Category = model('Category', CategorySchema)