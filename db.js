import mongoose from "mongoose";


export const mongooseDB = async () =>{
    await mongoose.connect('mongodb+srv://sreekanth:Sree123@restaurantapp-client.oyuzbyb.mongodb.net/')
}
