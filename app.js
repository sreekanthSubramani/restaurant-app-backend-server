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

//handlers
import mailToUser from './EmailTCP/mail.js'
import loginHandler from './LoginHandler/Loginhandler.js'
import categoryAdder from './CategoryHandler/CategoryAdder.js'

const app = express()
app.use(cors())
app.use(express.json())


app.use(mailToUser)
app.use(loginHandler)
app.use(categoryAdder)

const server = http.createServer(app)

mongooseDB()

server.listen(4444, (e)=>{
    if(!e){
        console.log('Server up')
    }else{
        console.log('server not working')
    }
})
