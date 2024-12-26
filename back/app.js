import express from 'express'
import 'dotenv/config'
import { connectDB } from './db/db.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

const limit = '16kb'


// cors proxy for 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))


// accespting the json data with it's limit
app.use(express.json({
    limit
}))

// url decoding
app.use(express.urlencoded({extended : true, limit }))

//for static file storing
app.use(express.static('public'))

// to store/access/modify cookies (CRUD operation of cookies )
app.use(cookieParser())





const PORT = process.env.PORT || 3000;



app.get('/',(req,res)=>{
    res.send('hellow world')
})




connectDB()
.then(
    app.listen(PORT,()=>{
        console.log(`LISTENING THE SERVER AT PORT ::  ${PORT}`)
    })
)
.catch((error)=>{
    console.log('MONGO DB CONNECTION FAILED !!!!!',error)
})







