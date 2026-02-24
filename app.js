import './dotenv.js'
import http from 'http'
import cors from 'cors'
import express from 'express'
import { mongooseDB } from './db.js'

//models
import { Usermodel } from './Models/Usermodel.js'
import { Category } from './Models/CategoryModel.js'
import { Subcategory} from './Models/SubCategoryModel.js'
import {Items} from './Models/Menu Models/ItemModel.js'
import { TheAddonModel } from './Models/Menu Models/AddonModel.js'

//handlers
import mailToUser from './EmailTCP/mail.js'
import loginHandler from './LoginHandler/Loginhandler.js'
import categoryAdder from './CategoryHandler/CategoryAdder.js'
import subCatHandler from './SubcategoryHandler/SubcategoryHandler.js'
import itemHandlers from './Itemhandler/Itemhandler.js' 
import addonRouter from './AddonHandler/AddonHandler.js'
import imageUploadRoute from './ImageHandler/Imagehandler.js'
import showAllAddons from './AddonHandler/FetchallAddons.js'
import itemShowHandler from './Itemshowers/Itemstoshow.js'
import sendCat from './CategoryHandler/Sendcategory.js'
import sendSubCat from './SubcategoryHandler/SendSubcategory.js'



const app = express()
app.use(cors())
app.use(express.json())


app.use(mailToUser)
app.use(loginHandler)
app.use(categoryAdder)
app.use(subCatHandler)
app.use(itemHandlers)
app.use(addonRouter)
app.use(imageUploadRoute)
app.use(showAllAddons)
app.use(itemShowHandler)
app.use(sendCat)
app.use(sendSubCat)

const server = http.createServer(app)   

mongooseDB()

server.listen(4444, (e)=>{
    if(!e){
        console.log('Server up')
    }else{
        console.log('server not working')
    }
})


