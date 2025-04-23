
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,

    }
})
const twitterUser = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,

    }
})
const Twitter_User = mongoose.model.Twitter_User || mongoose.model('Twitter_User',twitterUser)

const User = mongoose.model.User || mongoose.model('User',userSchema)

module.exports = {User,Twitter_User}