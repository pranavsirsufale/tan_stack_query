import express from 'express'
const app = express()
// import dotenv from 'dotenv'
// dotenv = dotenv.config()
import bodyParser from 'body-parser'



import fs from 'fs'
import os from 'os'

let user = os.userInfo()
console.log(user)
console.log(user.username)


fs.appendFile(`greeting.txt`,`Hii~ ${user.username} , \n `,()=>{
    console.log('file is created')
})





app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('listening on port 3000')
})


