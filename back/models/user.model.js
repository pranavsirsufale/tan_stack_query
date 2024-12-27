import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        userName : {
            type : String,
            required : true,
            unique : true,
            lowerCase : true,
            trim : true,
            index : true
        }
    },
    {
        timestamps : true
    }
)



export const User = mongoose.model('User',userSchema)