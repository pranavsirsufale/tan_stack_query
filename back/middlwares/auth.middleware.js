import jwt from 'jsonwebtoken'
import { ApiError, asyncHandler } from '../utils'

export const verifyJWT = asyncHandler( async(req,res,next)=> {
    const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ','')

    if(!token) {
        throw new ApiError(
            401,
            'Unauthorized reqest'
        )
    }

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

})




