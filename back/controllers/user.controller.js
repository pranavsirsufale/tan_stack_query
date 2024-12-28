import {
    ApiError,
    ApiResponse,
    asyncHandler,
    uploadOnCloudinary,
} from "../utils/index.js";
import { User } from "../models/user.model.js";

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

    const isPassCorrect = await user.isPasswordCorrect(password);
    user["password"] = "";

    if (!isPassCorrect)
        throw new ApiError(
            400,
            "Enter a valid password",
            "you have entered a wrong password"
        );

    res.status(200).json(new ApiResponse(200, user, "Logged in Successfully"));
});




export { registerUser, loginUser };
