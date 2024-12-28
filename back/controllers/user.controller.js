import {
    ApiError,
    ApiResponse,
    asyncHandler,
    uploadOnCloudinary,
} from "../utils/index.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateRefreshAndAccessToken = async (userId) => {
    let user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToekn = await user.generateRefreshToken();
    user.refreshToekn = refreshToekn;
    user = await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToekn };
};
const registerUser = asyncHandler(async (req, res) => {
    //    console.log(req)

    const { fullName, email, userName, password } = req.body;
    // console.log(req.files)

    if (
        [fullName, email, userName, password].some(
            (value) => value?.trim() === ""
        )
    ) {
        throw new ApiError(400, " All fields are required");
    }

    const existinguser = await User.findOne({
        $or: [{ userName }, { email }],
    });

    if (existinguser) {
        throw new ApiError(409, "User Already exists", "User already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(
            400,
            "Abatar file is required",
            "abatar file is required "
        );
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    let coverImage = "";
    if (coverImageLocalPath) {
        coverImage = await uploadOnCloudinary(coverImageLocalPath);
    }
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        userName: userName.toLowerCase(),
    });
    const UserCreated = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    if (!UserCreated) {
        throw new ApiError(
            500,
            "something went wrong while uploading from server",
            "something went wrong while uploaidng from the server "
        );
    }
    res.status(200).json(
        new ApiResponse(200, UserCreated, "user created successfully")
    );
});
const loginUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName && !email)
        throw new ApiError(
            400,
            "please enter email or userName ",
            "Please enter email or userName"
        );
    const user = await User.findOne({
        $or: [{ userName }, { email }],
    });
    if (!user) {
        throw new ApiError(404, "User does not exist", "User does not exist");
    }
    const isPassCorrect = await user.isPasswordCorrect(password);

    if (!isPassCorrect) {
        throw new ApiError(
            400,
            "Enter a valid password",
            "you have entered a wrong password"
        );
    }
    const { refreshToekn, accessToken } = await generateRefreshAndAccessToken(
        user._id
    );
    user.password = "";
    // send cookies
    const options = {
        httpOnly: true,
        secure: true,
    };
    user.accessToken = accessToken;
    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToekn, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: user,
                    accessToken,
                    refreshToekn,
                },
                "Logged in Successfully"
            )
        );
});
const logoutUser = asyncHandler(async (req, res) => {
    const user = req.user;
    User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToekn: undefined,
            },
        },
        {
            new: true,
        }
    );
    const options = {
        httpONly: true,
        secure: true,
    };
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, "User has been logged out successfully"));
});









const refreshAccessToken = asyncHandler( async (req,res)=> {
    const incomeingRefreshToken = req.cookies.refreshToken || req.header('Authorization')?.replace('Bearer ','')

    if(!incomeingRefreshToken) {
        throw new ApiError(
            401,
            "Unauthorized Reqeust"
        )
    }

    const decodedToken = jwt.verify(incomeingRefreshToken,process.env.REFRESH_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id).select('-password')

    if(!user){
        throw new ApiError(401,
            "Invalid refresh token"
        )
    }

    if(incomeingRefreshToken !== user?.refreshToken){
        throw new ApiError(401,
            "Invalid Refresh Token"
        )
    }

    const { refreshToekn , accessToken } = await generateRefreshAndAccessToken(user._id)
    

    const options = {
        httpOnly : true,
        secrure : true
    }

    res
    .status(200)
    .cookie('refreshToken',refreshToekn,options)
    .cookie('accessToken',accessToken,options)
    .json(
        new ApiResponse(
            200,
            {
                accessToken,refreshToekn,user
            }
        )
    )


})



export { registerUser, loginUser, logoutUser ,refreshAccessToken };
