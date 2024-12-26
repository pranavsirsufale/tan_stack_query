import dotenv from 'dotenv'
import mongoose, { disconnect } from 'mongoose';
dotenv.config()


// const URI = 'mongodb+srv://pradiprane85:Pooja%40123@cluster0.ucvnvzf.mongodb.net/'
// const db = 'vote_app'

// console.log(db)




// const connectDB = async () => {
//     try {
//         const res = await mongoose.connect(`${process.env.DB_URI}${process.env.NAME}`)
        

//         console.log('DATABASE CONNECTE SUCCessfully :: ',res.connection)
//     } catch (error) {
//         console.log('ERROR OCCURED WHILE CONNECTING THE DATA BASE ::: ',error);
//         process.exit(0)
//     }
// }

// connect db
mongoose.connect(URL,{
useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection



db.on('connected',()=>{
    console.log('DATA BASE IS CONNECTED TO THE DATA BASE : : :: ')
})



db.on('error',()=>{
    console.log('ERROR HAS BEEN OCCURED ::')
})


db.on('disconnected',()=>{
    console.log('DATABASE HAS BEEN DISCONECTED :: ')
})


db.on('reconnected',()=> {
    console.log('dATABASE HAS BEEN CONNECTED :: ')
})



// connectDB()

export { connectDB }








