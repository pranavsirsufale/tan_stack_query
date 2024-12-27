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




/**
 .env variables >>>
 ACCESS_TOKEN_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9yJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 ACCESS_TOKEN_EXPIRY=1d
 REFRESH_TOKEN_SECRET=iaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5ceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9yJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiw
 REFRESH_TOKEN_EXPIRY=10d 
 */


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        email : this.email,
        userName : this.userName,
        fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


// userSchema.plugin(aggregatePaginate)
export const User = mongoose.model('User',userSchema)



















