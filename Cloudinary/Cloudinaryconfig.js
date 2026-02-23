import {v2 as Cloudinary} from 'cloudinary'

Cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUDNAME,
    api_key : process.env.CLOUDINARY_APIKEY,
    api_secret : process.env.CLOUDINARY_APISECRET
})


export default Cloudinary