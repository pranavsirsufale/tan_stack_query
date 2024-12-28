import { ApiError,ApiResponse, asyncHandler } from '../utils/index.js'
import { User } from '../models/user.model.js'


const registerUser = asyncHandler(async (req,res)=>{
    
//    console.log(req)

    const { fullName,email,userName,password} = req.body
    
    console.log(req.body) 
    
    if (
    [fullName , email , userName,password].some((value)=> value?.trim() === "")
    ){
        throw new ApiError(400 ,
            " All fields are required",)}
 
     

    res.status(200)
    .json({
        message : 'Ok',
     
        
    })
})






export { registerUser,}