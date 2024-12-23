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

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="server.js"></script>
    <title>Document</title>
</head>
<body>
    <h1> 
        hii there ! I'am Pranav sirsufale hailing from Dr. Babasaheb Ambedkar Marathwada University. Chh. Sambhaji nagar
    </h1>
</body>
</html>`)
})





app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('listening on port 3000')
})


