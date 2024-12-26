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


app.use(express.urlencoded({extended : true, limit }))

app.use(express.static('public'))





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







