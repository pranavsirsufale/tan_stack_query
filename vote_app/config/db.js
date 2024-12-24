import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()


// const URI = 'mongodb+srv://pradiprane85:Pooja%40123@cluster0.ucvnvzf.mongodb.net/'
// const db = 'vote_app'

// console.log(db)




const connectDB = async () => {
    try {
        const res = await mongoose.connect(`${process.env.DB_URI}${process.env.NAME}`)

        console.log('DATABASE CONNECTE SUCCessfully :: ',res.connection)
    } catch (error) {
        console.log('ERROR OCCURED WHILE CONNECTING THE DATA BASE ::: ',error);
        process.exit(0)
    }
}


connectDB()

// export { connectDB }








