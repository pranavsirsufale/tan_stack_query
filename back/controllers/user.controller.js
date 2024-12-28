import { ApiError,ApiResponse, asyncHandler , uploadOnCloudinary } from '../utils/index.js'
import { User } from '../models/user.model.js'



const registerUser = asyncHandler(async (req,res)=>{
    
//    console.log(req)

    const { fullName,email,userName,password} = req.body
    
   console.log(email)
    
    if (
    [fullName , email , userName,password].some((value)=> value?.trim() === "")
    ){
        throw new ApiError(400 ,
            " All fields are required",)}
 
     

    res.status(200)
    .json({
        message : 'Ok',
     
        
    })

    const existinguser = await User.findOne({
        $or : [{userName}, {email}]
    })

    if ( existinguser) {
        throw new ApiError(409,
            "User Already exists"
        )
    }

    const avatarLocalPath = req.files?.avatar[0]?.path  
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath) {
        throw new ApiError(400,
            'Abatar file is required'
        )
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    
    if ( coverImageLocalPath){
        const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    }

    const user = await User.create({
        fullName,
        avatar : avatar.url,
        coverImage : coverImage?.url || '',
        email ,
        password ,
        userName : userName.toLowerCase()
    })

    const isUserCreated = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!isUserCreated) {
        throw new ApiError(
         500,
         "something went wrong while uploading from server"
        )
    }

    





})






export { registerUser,}