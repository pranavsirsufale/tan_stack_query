import mongoose from "mongoose";


const connectDB = async () =>{
    mongoose.connect(`${process.env.DB_URI}${process.env.DB_NAME}`)

const db = mongoose.connection;

db.on('connected', (host)=>{
    console.log('DATABASE HAS BEEN CONNECTED SUCCESSFULLY :::: ')
    console.log(db.host)
})

db.on('error',(error)=>{
    console.log(error)
})

db.on('disconnected',()=>{
    console.log('DB HAS BEEN DISCONNECTED ::: ')
})

}


export { connectDB }

