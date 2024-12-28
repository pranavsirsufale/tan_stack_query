import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils'

export const verifyJWT = asyncHandler( async(req,res,next)=> {
    const accessToken = req.cookies?.accessToken || req.header('Authorization')
})




