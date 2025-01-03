import mongoose from "mongoose";


// const connectDB = async () =>{
//     mongoose.connect(`${process.env.DB_URI}${process.env.DB_NAME}`)

// const db = mongoose.connection;
// db.on('connected', (host)=>{
//     console.log('DATABASE HAS BEEN CONNECTED SUCCESSFULLY :::: ')
//     console.log(db.host)
// })
// db.on('error',(error)=>{
//     console.log(error)
// })
// db.on('disconnected',()=>{
//     console.log('DB HAS BEEN DISCONNECTED ::: ')
// })}


const db_URI =`${process.env.DB_URI}${process.env.DB_NAME}` 



const connectDB = async () => {

    try {
        const res = await mongoose.connect(db_URI);
        console.log('DB HAS BEEN CONNECTED SUCCESSFULLLY :: ',res.connection.host)
    } catch (error) {
        console.log('ERROR OCCURES WHILE CONNECTING THE DB:::',error);
        process.exit(1)
    }

}



export { connectDB }

