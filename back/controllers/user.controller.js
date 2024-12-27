import { asyncHandler } from '../utils/asyncHandler.js'


const registerUser = asyncHandler(async (req,res)=>{
    
   const { userName , email , password } = req.body;

      
    
 
     
    console.log(req.body)

    res.status(200)
    .json({
        message : 'Ok',
        
    })
})



export { registerUser,}