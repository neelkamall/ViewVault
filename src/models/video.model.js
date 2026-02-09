import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggreagate-paginate-v2"
const videoSchema = newSchema ({
  videoTitle :{
    type : String,
    required : true
  },
  thumbnail : {
    type: String,
    required : true
  },
  duration : {
    type : Number,
    required : true

  },
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  views : {
    type : Number,
    default : 0
  },
  isPublished : {
    type : Boolean,
    default : true
  },
  owner : {
    type : Schema.Types.ObjectID,
    ref : "User"
  }
},
{
  timestamps : true
})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)