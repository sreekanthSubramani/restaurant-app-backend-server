import express from 'express'
import upload from './Uploadviamulter.js'
import uploadToCloudinary from './Cloudinaryupload.js'

const imageUploadRoute = express.Router()

imageUploadRoute.post('/image/upload/cloud',upload.single('picture'), async (req, res)=>{
    try{

        if(!req.file){
            return res.status(500).json({msg : "No file been sent"})
        }

        const result = await uploadToCloudinary(req.file.buffer)
        console.log(result, 'result from backend')
        return res.json({msg : result})
    }catch(e){
        console.log(e)
    }
})





    
export default imageUploadRoute