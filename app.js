import http from 'http'
import cors from 'cors'
import express from 'express'


const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

server.listen(4444, (e)=>{
    if(!e){
        console.log('Server up')
    }else{
        console.log('server not working')
    }
})