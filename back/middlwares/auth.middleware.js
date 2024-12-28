import jwt from 'jsonwebtoken'
import { ApiError, asyncHandler } from '../utils/index.js'
import { User } from '../models/user.model.js'

export const verifyJWT = asyncHandler( async(req,res,next)=> {
    const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ','')

    try {
        if(!token) {
            throw new ApiError(
                401,
                'Unauthorized reqest'
            )
        }
    
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken._id)
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
    
        req.user = user;
    
        next()
    
    } catch (error) {
        throw new ApiError(
            401,
            error
        )
    }

})




