import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default:"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
    }
},{timestamps: true}) //time of creation and time of edit is automatically stored by mongodb

const User = mongoose.model('User', userSchema)

export default User