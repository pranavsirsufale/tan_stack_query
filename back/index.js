import express from 'express'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('hellow world')
})






app.listen(PORT,()=>{
    console.log(`listening on the port ${PORT}`)
})






