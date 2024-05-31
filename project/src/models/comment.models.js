import mongoose , {Schema} from "mongoose";
import mongooseAgreegationPaginate  from "mongoose-aggregate-paginate-v2"


const commentSchema = new mongoose.Schema(
  {
  content: {
    type: String,
    required: true
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},
{
  timestamps: true
}
)

commentSchema.plugin(mongooseAgreegationPaginate)

export const Comment = new mongoose.model("Comment" , commentSchema)