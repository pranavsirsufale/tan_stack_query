import express from 'express'
import 'dotenv/config'
import { connectDB } from './db/db.js'
const app = express()
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







