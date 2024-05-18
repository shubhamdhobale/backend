import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.models.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'


const registerUser = asyncHandler( async (req , res ) => {
  // res.status(200).json({
  //   message : "ok"
  // })

  //get user details from frontend
  //validation - not empty
  //check if user is already exists: username and email
  //check for image and avatar
  // upload them on cloudinary
  //create user object in database
  //remove password and refreshToken field from response
  //check for user creation 
  //return res

  const {username , email , fullname , password} = req.body
  console.log("email: " , email);

  if (
    [username , fullname , email , password ].some((field) => field?.trim() === "") 
  ) {
    throw new ApiError(400 , "All fields are required")
  }


  const existedUser = User.findOne({
    $or: [{username},{email}]
  })
  if (existedUser) {
    throw new ApiError(409 , "Username or Email is already existed")
  }

const avatarLocalPath = req.files?.avatar[0]?.path
const coverImageLocalPath = req.files?.coverImage[0]?.path

if (!avatarLocalPath) {
  throw new ApiError(400 , "Avatar is required")
}

const avatar = await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)

if (!avatar) {
  throw new ApiError(400 , "avatar is required")
}

const user = await User.create({
  fullname,
  avatar: avatar.url,
  coverImage: coverImage?.url || "",
  email,
  password,
  username : username.toLowerCase()
})

const createdUser = User.findById(user._id).select("-password -refreshToken")

if (!createdUser) {
  throw new ApiError(500 , "Something went wrong while registering the user")
}

return res.status(201).json(
  new ApiResponse(200 , createdUser , "User Registered Successfully")
)

} )




export {registerUser}