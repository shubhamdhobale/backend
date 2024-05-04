import mongoose from "mongoose";
import mongooseAgreegatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
  videoFile: {
    type: String,    //cloudnary url
    required: true,
  },
  thumbnail: {
    type: String,    //cloudnary url
    required: true,
  },
  title: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  duration: {
    type: Number,
    required:true
  },
  views: {
    type: Number,
    default:0
  },
  isPublish: {
    type: Boolean,
    default:true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,   //connect to user model
    ref:"User"
  }
}, {timestamps: true})


videoSchema.plugin(mongooseAgreegatePaginate)

export const Video = mongoose.model("Video",videoSchema)