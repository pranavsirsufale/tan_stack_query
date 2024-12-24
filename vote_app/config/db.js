import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const URI = 'mongodb+srv://pradiprane85:Pooja%40123@cluster0.ucvnvzf.mongodb.net/'
const db = 'vote_app'

console.log(db)




const connDB = async () => {
    try {
        const res = await mongoose.connect(`${URI}${db}`)

        console.log('DATABASE CONNECTE SUCCessfully :: ',res)
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}

// const connectDB =  async () => {
//     try {
//         const res = await mongoose.connect(`${process.env.MONGODB_URI}/${dock}`)
//         console.log('DATABSE CONNECTED SUCCESSFULLY ::' , res.connection.host);
//         return res

//     } catch (error) {
//         console.log('THE ERROR OCCURED WHILE CONNECTING THE DATABASE :: THE ERRORS ARE :: >>>' , error );
//         process.exit(0)
//     }
// }

connDB()

// export { connectDB }








