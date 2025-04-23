import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})

module.exports.Post = mongoose.model('Post',postSchema) || mongoose.model.Post;