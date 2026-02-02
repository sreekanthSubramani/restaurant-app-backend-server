import mongoose, {Schema, model} from "mongoose";

const UserSchema = new Schema({
    name : {
        type : String,
        required : true   
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    refreshToken : {
        type : String,
        required : false
    },
    role : {
        type : String,
        enum : ['User', 'Admin'],
        default : "User"
    }
},{
    timestamps : true,
    versionKey : "devVersion"
})


export const Usermodel = model('User', UserSchema)