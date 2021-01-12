import mongoose from 'mongoose';

// A schema is a uniform document requiring
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Ties PostMessage to the schema as a model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;