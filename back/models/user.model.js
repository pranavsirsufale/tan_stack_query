import mongoose,{Schema} from "mongoose";
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema = new Schema(
    {
        userName : {
            type : String,
            required : true,
            unique : true,
            lowerCase : true,
            trim : true,
            index : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowerCase : true,
            trim : true
        },
        fullName : {
            type : String,
            required : true,
            trim : true
        },
        avatar : {
            type : String, // cloudinary url
            required : true,

        },
        coverImage : {
            type : String
        },
        watchHistory : [{
            type : Schema.Types.ObjectId ,
            ref : 'Video'
            }
        ],
        password : {
            type : String,
            required : [true, 'Password is required']
        },
        refreshToken : {
            type : String,
        }
    },
    {
        timestamps : true
    }
)


userSchema.pre('save',
    async function(next){
        if (!this.isModified('password')) return
        this.password = await bcrypt.hash(this.password,8)
        next()
    }
)



// userSchema.plugin(aggregatePaginate)
export const User = mongoose.model('User',userSchema)

















