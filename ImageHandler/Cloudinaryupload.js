import Cloudinary from "../Cloudinary/Cloudinaryconfig.js";
import streamifier from 'streamifier'

const uploadToCloudinary = (buffer)=>{
    return new Promise((resolve, reject)=>{
        const stream = Cloudinary.uploader.upload_stream(
            {folder : "uploads"},
            (err, res)=>{
                if(res) resolve(res)
                    else reject(err)
            }
        );
        streamifier.createReadStream(buffer).pipe(stream)
    })
}


export default uploadToCloudinary