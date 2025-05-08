import {Schema, model, models} from 'mongoose'

const BlogSchema = new Schema({
  authorUsername: {
    type: String,
    required: true,
  },
  authorAvatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  coverImageUrl: {
    type: String,
  },
  summary: {
    type: String,
  },
  likedBy: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
}, {
  timestamps: true,
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;